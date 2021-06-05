import os
from dotenv import load_dotenv

project_folder = os.path.expanduser('./')
load_dotenv(os.path.join(project_folder, '.env'))
token = os.getenv("TOKEN")
chatid = os.getenv("CHAT_ID")

import requests

print("Token:", token)

# GET Req examples
# response = requests.get("https://potion-api.vercel.app/table?id=ed5a59a2d5924e6f81044a1ac9247f97")
# print(response.json())

# def sendMessage(message):
#     url = 'https://api.telegram.org/bot'+str(token)+'/sendMessage?chat_id='+str(chatid)+'&text='+str(message)
#     x = requests.post(url)
#     print(x.text)

# sendMessage("Krsh")