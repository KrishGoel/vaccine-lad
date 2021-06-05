# Vaccine Lad
> Abandoned

A Telegram Bot that performs the cron job of checking the CoWIN API Endpoints for any open vaccine slots. Built using GitHub Actions and Python.

I mainly did this micro-project to increase my knowledge of server-sided Python, GitHub Actions, and API endpoints. 

I achieved the ability to send a notification to my Telegram through this bot. The rest of the job is abandoned since the leftover code is just plain logic and the result however functional and satisfying wouldn't be worth it in terms of the product and hence I am abandoning the code.

I have still attached all the resources you would need to take it up from here. Feel free to hit me up anytime in case you'd wanna discuss anything about this code.

# Functioning
The essential idea is to scan through the response JSON obtained from the CoWIN APIs, filter out entries qualifying the criteria (in my case, ```min_age_limit``` = 18 and ```available_capacity``` > 5).

However, the issue that arises with this approach is the fact that the CoWIN APIs return responses for each district and each day, so anyone comfortable with going around the whole town (Delhi for me) would have to run 77 searches (11 districts in Delhi x 7 days of the week) each time the Bot performs the cron job. This is where the code got boring for me and I abandoned it, while it isn't a big issue and could easily be worked around, it didn't seem worthy to me.

Once the code finds even a single entry that qualifies the criteria, it will generate a message including the details of the venue, day, vaccine-name, etc, and shoot it over Telegram. Which is again piss easy but demanding. I have already completed the notification segment of the code, you can see it at ```notify.py```.

# Resources used
- [CoWIN API explained by Postman](https://documenter.getpostman.com/view/9564387/TzRPip7u)
- [CoWIN APIs on API Setu](https://apisetu.gov.in/public/api/cowin#/Appointment%20Availability%20APIs)
- Postman for testing POST and GET Requests
- [Setting up GitHub Actions with Python](https://docs.github.com/en/actions/guides/building-and-testing-python) For reference, checkout ```.github/workflows/main.yaml```

- Creating a Telegram Bot
    1. Open the telegram app and search for @BotFather. 
    2. Click on the start button or send “/start”. 
    3. Then send “/newbot” message to set up a name and a username. 
    4. After setting name and username BotFather will give you an API token which is your bot token. 
    5. For the next steps, I slacked out and used [@get_id_bot](https://t.me/get_id_bot) to get a ```CHAT_ID```. A much better method would be to use ```telebot``` and ```telethon``` as suggested in this article [Send a message to Telegram user using Python by GeeksForGeeks](https://www.geeksforgeeks.org/send-message-to-telegram-user-using-python/).

A major shoutout to [@plibither8](https://github.com/plibither8) for helping me throughout the way and providing references.