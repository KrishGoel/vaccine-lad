import os

# # For localdev, store your variables in the .env file 
# from dotenv import load_dotenv
# project_folder = os.path.expanduser('./')
# load_dotenv(os.path.join(project_folder, '.env'))
# TOKEN = os.getenv("TOKEN")
# CHAT_ID = os.getenv("CHAT_ID")

# For deployment, store your variables as Repository Secrets on GitHub
TOKEN = os.environ["TOKEN"]
CHAT_ID = os.environ["CHAT_ID"]

import requests

def sendMessage(message):
    url = 'https://api.telegram.org/bot'+str(TOKEN)+'/sendMessage?chat_id='+str(CHAT_ID)+'&text='+str(message)
    requests.post(url)
    if (requests.post(url).json()['ok'] == True):
        print("The message was delivered!")
    else:
        print("Message delivery failed!")
        print(requests.post(url).text)        