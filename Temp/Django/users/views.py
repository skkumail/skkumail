from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login, logout 
from .models import user_log
from rest_framework import status
from rest_framework import serializers
from django.contrib.auth.decorators import login_required
from django.utils.decorators import method_decorator
import subprocess
from time import perf_counter
from io import TextIOWrapper
import ctypes
from pathlib import Path
import pandas as pd
from django.http import JsonResponse
from sklearn.preprocessing import StandardScaler
import smtplib
from email.mime.text import MIMEText
import openai
from imap_tools import MailBox

########### MAIL 작성 #######################
def mail_generator(text, prompt, answer, style, name, relation):
    # api_key는 반드시 반드시 업로드하지 말 것!!!
    openai.api_key = "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"

    # 로그 있는 경우 => 로그 기반 few shot learning
    # 로그 없는 경우 => default setting으로 few shot learning
    if prompt:
        prompt = prompt
        answer = answer
    else:
        assets_path = Path(__file__).resolve().parent / 'assets'
        prompt_path = assets_path / 'roleplay_prompt.txt'
        answer_path = assets_path / 'roleplay_answer.txt'
        with prompt_path.open('r',encoding='UTF8') as f:
            prompt = f.read().strip()
        with answer_path.open('r',encoding='UTF8') as f:
            answer = f.read().strip()

    # ChatGPT inference
    try:
        completion = openai.ChatCompletion.create(
            model="gpt-3.5-turbo",
            messages=[
                {'role': 'user', 'content': prompt},
                {'role': 'assistant', 'content': answer},
                {'role': 'user', 'content': f'아래 내용을 모두 고려하여 비즈니스 메일을 작성해줘. 상대 이름은 {name}으로 나와는 {relation}이라는 관계야. 메일을 작성할 때는 가독성이 있어야 하며, {style}한 분위기로 작성해야 해. 앞에서 말한 고려사항들을 생각하면서 동시에 반드시 아래 내용을 모두 포함하여 메일을 작성해줘.\n{text}'}
            ]
        )
    
        return completion.choices[0].message['content'].strip()
    except:
        return "error"

# 메일 작성 부분 - with ChatGPT
class ChatgptView(APIView):
    permission_classes = (AllowAny,)
    def post(self, request):
        try:
            contents = request.data.get('contents')

            try: # 동일한 상대에게 보냈던 메일로 few shot learning -> 그냥 동일한 카테고리(이건 어찌 분류?) 정도로 해도 괜찮을 듯...
                username = request.data.get('username')
                sendaddr = request.data.get('send_address')
                style = request.data.get('style')
                name = request.data.get('name')
                relation = request.data.get('relation')

                pre_contents = list(user_log.objects.filter(user_name = username, target = sendaddr))

                for temp_item in pre_contents:
                    pre_prompt = temp_item.prompt
                    pre_contents = temp_item.contents
                    break
                chatgpt_infer= mail_generator(contents, pre_prompt, pre_contents, style, name, relation)    
            
            except:
                chatgpt_infer= mail_generator(contents, None, None, style, name, relation)

            if chatgpt_infer == "error":
                return Response({'message': '연결 실패'}, status=400)
            return Response({'message': '연결 성공', 'data':chatgpt_infer})
        
        except:
            return Response({'message': '연결 실패'}, status=400)
        



########## MAIL 전송 (user_log에 prompt & contents 추가할 것!!!! [아직.. SQLite3로 확정되면 바로 할 것!]) ##########
class SendmailView(APIView):
    permission_classes = (AllowAny,)
    def post(self, request):
        try:
            username = request.data.get('username')

            temp_user = User.objects.get(username = username)
            id = temp_user.first_name
            password = temp_user.last_name
            head = request.data.get('head')
            text = request.data.get('text')
            address = request.data.get('address')

            smtp = smtplib.SMTP('smtp.gmail.com', 587)
            smtp.ehlo()
            smtp.starttls()
            smtp.login(id, password)


            msg = MIMEText(text) # 본문
            msg['Subject'] = head # 제목

            smtp.sendmail(id, address, msg.as_string())

            smtp.quit()

            prompt = request.data.get('prompt')

            try:
                temp_user = user_log.objects.filter(username =username, send_address = address)
                temp_num = len(list(temp_user))
                
                start = len(list(user_log.objects.all()))
                temp_user_update = user_log(id = start, username = username, send_address = address, prompt = prompt, result=text, num = temp_num)
                temp_user_update.save()
            except:
                start = len(list(user_log.objects.all()))
                temp_user_update = user_log(id = start, username = username, send_address = address, prompt = prompt, result=text, num = 0)
                temp_user_update.save()
            return Response({'message': '전송 성공'})
        
        except:
            return Response({'message': '전송 실패'}, status=400)


############# Mail 조회 ##############
class ShowmailView(APIView):
    permission_classes = (AllowAny,)
    def post(self, request):
        try:
            id = request.data.get('id')
            password = request.data.get('password')
            option = request.data.get('option')
            target = request.data.get('target')
            mailbox = MailBox("imap.gmail.com", 993)
            mailbox.login(id, password, initial_folder="INBOX")
            total_list = []
            if option == 0: # 최신 순
                for msg in mailbox.fetch(limit=False, reverse=True):
                    total_list.append([msg.subject, msg.from_, msg.to, msg.date, msg.text])
            if option == 1: # 특정 발신자 대상으로만
                for msg in mailbox.fetch(f"(FROM {target})",limit=False, reverse=True):
                    total_list.append([msg.subject, msg.from_, msg.to, msg.date, msg.text])

            mailbox.logout()
            return Response({'message': '연결 성공', 'data':total_list})
        
        except:
            return Response({'message': '연결 실패'}, status=400)
        




############### 기본 ###################
class RegisterView(APIView):
    permission_classes = (AllowAny,)
    def post(self, request):
        username = request.data.get('username')
        password = request.data.get('password')
        password_config=request.data.get('password_config')
        gmail_id = request.data.get('gmail_id')
        gmail_key = request.data.get('gmail_key')
   
        if password!=password_config:
            return Response({'message': '비밀번호 불일치'})


        try:
            smtp = smtplib.SMTP('smtp.gmail.com', 587)
            smtp.ehlo()
            smtp.starttls()
            smtp.login(gmail_id, gmail_key)
            smtp.quit()
        except:
            return Response({'message': '이메일 인증 실패'})

        
        try:    
            user = User.objects.create_user(username=username, password=password, last_name = gmail_key, first_name = gmail_id)
            user.save()
            return Response({'message': '회원가입 성공'})

        except:
            return Response({'message': '회원가입 실패'})


class LoginView(APIView):
    permission_classes = (AllowAny,)
    def post(self, request):
        username = request.data.get('username')
        password = request.data.get('password')
        user = authenticate(username=username, password=password)
        if user is not None:
            login(request, user)
            temp_user = User.objects.get(username=username)
            return Response({'message': '로그인이 완료되었습니다.', 'data':temp_user.username})
        else:
            return Response({'message': '로그인에 실패하였습니다.'}, status=400)


class LogoutView(APIView):
    def post(self, request):
        logout(request)
        return Response({'message': '로그아웃이 완료되었습니다.'})
