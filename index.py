# # To get today's date in IST
from datetime import datetime
import pytz
IST = pytz.timezone('Asia/Kolkata')
dateToday = datetime.now(IST).date()

# # Notification system
from notify import sendMessage
# sendMessage("Test") #Triggering this function would send me a Telegram message saying "Test"

# # GET Req examples
# response = requests.get(URLtoTheAPIEndpoint)
# print(response.json())

# District IDs in Delhi: [140,150], n=11