from django.db import models


class user_log(models.Model):
    username =models.TextField()
    send_address =models.TextField()
    prompt = models.TextField()
    result = models.TextField()
    num = models.IntegerField()































    



# class user_info(models.Model):
#     student_id =models.TextField()
#     usertype =models.IntegerField()
#     timetable =models.TextField()
#     memo =models.TextField()
    # retry_standard = models.TextField()

# class user_isu(models.Model):
#     student_id =models.TextField()
#     grade_score =models.TextField()
#     lect_name =models.TextField()
#     credit =models.IntegerField()
#     lect_domain =models.TextField()

# class user_refined_isu(models.Model):
#     student_id =models.TextField()
#     lect_name =models.TextField()
#     credit =models.IntegerField()
#     lect_domain =models.TextField()
#     is_retry =models.IntegerField()

# class open_major(models.Model):
#     lect_name =models.TextField()
#     prof_name =models.TextField()
#     lect_room =models.TextField()
#     lect_time =models.TextField()
#     lect_time_numbered = models.TextField()
#     lect_onoff =models.TextField()
#     lect_domain =models.TextField()
#     credit =models.IntegerField()

# class open_gyoyang(models.Model):
#     lect_name =models.TextField()
#     prof_name =models.TextField()
#     lect_room =models.TextField()
#     lect_time =models.TextField()
#     lect_time_numbered = models.TextField()
#     lect_onoff =models.TextField()
#     lect_domain =models.TextField()
#     credit =models.IntegerField()

# class lecture_review(models.Model):
#     lect_name= models.TextField()
#     prof_name= models.TextField()
#     total_rating= models.FloatField()
#     hw_rating= models.FloatField()
#     team_rating= models.FloatField()
#     grade_score_rating= models.FloatField()
#     hashtag= models.TextField()

# class total_year_abeek_info(models.Model):
#     year= models.IntegerField()
#     abeek_gyoyang= models.IntegerField()
#     abeek_MSC_must= models.IntegerField()
#     abeek_MSC_total= models.IntegerField()
#     abeek_major_must= models.IntegerField()
#     abeek_major_total= models.IntegerField()
#     abeek_design= models.IntegerField()


# class graduate_18_info(models.Model):
#     insung= models.IntegerField()
#     leader= models.IntegerField()
#     commu= models.IntegerField()
#     creative= models.IntegerField()
#     b_eng= models.IntegerField()
#     p_eng= models.IntegerField()
#     bsm= models.IntegerField()
#     bsm_c= models.IntegerField()
#     people= models.IntegerField()
#     society= models.IntegerField()
#     tech= models.IntegerField()
#     gyoyang_total= models.IntegerField()
#     major_total= models.IntegerField()
#     credit_total= models.IntegerField()

# class graduate_21_info(models.Model):
#     insung= models.IntegerField()
#     classic= models.IntegerField()
#     commu= models.IntegerField()
#     creative= models.IntegerField()
#     eng_must= models.IntegerField()
#     eng_choice= models.IntegerField()
#     bsm= models.IntegerField()
#     people= models.IntegerField()
#     society= models.IntegerField()
#     tech= models.IntegerField()
#     ds= models.IntegerField()
#     gyoyang_total= models.IntegerField()
#     major_core= models.IntegerField()
#     major_deep= models.IntegerField()
#     major_total= models.IntegerField()
#     credit_total= models.IntegerField()

# class abeek_18_major_info(models.Model):
#     lect_name = models.TextField()
#     credit = models.IntegerField()
#     is_must = models.IntegerField()
#     credit_design = models.IntegerField()


# class abeek_21_major_info(models.Model):
#     lect_name = models.TextField()
#     credit = models.IntegerField()
#     is_must = models.IntegerField()
#     credit_design = models.IntegerField()


# class abeek_18_MSC_info(models.Model):
#     lect_name = models.TextField()
#     credit = models.IntegerField()
#     is_must = models.IntegerField()
#     group_num = models.IntegerField()


# class abeek_21_MSC_info(models.Model):
#     lect_name = models.TextField()
#     credit = models.IntegerField()
#     is_must = models.IntegerField()
#     group_num = models.IntegerField()


# class relate_score_info(models.Model):
#     lect_name = models.TextField()
#     relate_lect_name = models.TextField() 
#     relate_score = models.IntegerField()


# class recommend_level_info(models.Model):
#     level = models.IntegerField() 
#     lect_name = models.TextField()


# class pre_penalty_score_info(models.Model):
#     lect_name = models.TextField() 
#     pre_lect_name = models.TextField()
#     pre_penalty_score = models.IntegerField()


# class user_eval(models.Model):
#     student_id = models.TextField() 
#     lect_name = models.TextField()
#     prof_name = models.TextField()
#     is_up = models.IntegerField()
#     is_down = models.IntegerField()

    