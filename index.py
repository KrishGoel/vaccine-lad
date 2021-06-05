import os
# from dotenv import load_dotenv

# For localdev
# project_folder = os.path.expanduser('./')
# load_dotenv(os.path.join(project_folder, '.env'))
# TOKEN = os.getenv("TOKEN")
# CHAT_ID = os.getenv("CHAT_ID")

TOKEN = os.environ.get("TOKEN")
CHAT_ID = os.environ.get("CHAT_ID")

# import requests

print("Token:", TOKEN)

# GET Req examples
# response = requests.get("https://potion-api.vercel.app/table?id=ed5a59a2d5924e6f81044a1ac9247f97")
# print(response.json())

# def sendMessage(message):
#     url = 'https://api.telegram.org/bot'+str(TOKEN)+'/sendMessage?chat_id='+str(CHAT_ID)+'&text='+str(message)
#     x = requests.post(url)
#     print(x.text)

# sendMessage("Krsh")