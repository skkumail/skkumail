from googletrans import Translator


def translate(text:str)->str:
    tr = Translator()
    result = str(tr.translate(text=text, dest='ko').text)

    return result
