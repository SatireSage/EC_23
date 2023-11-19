import warnings

warnings.filterwarnings("ignore")
from twilio.rest import Client
from dotenv import load_dotenv
import os

link = "https://satiresage.github.io/EC_23/location"

dotenv_path = os.path.join(os.path.dirname(__file__), "token.env")
load_dotenv(dotenv_path)

account_sid = os.getenv("TWILIO_ACCOUNT_SID")
auth_token = os.getenv("TWILIO_AUTH_TOKEN")
from_number = os.getenv("TWILIO_PHONE_NUMBER")

if not all([account_sid, auth_token, from_number]):
    raise ValueError(
        "Twilio account SID, auth token, or phone number not set as environment variables."
    )

client = Client(account_sid, auth_token)

users = ["7789811091"]
message_body = (
    "Please proceed to the nearest evacuation center. For guidance visit {}".format(
        link
    )
)

for user in users:
    message = client.messages.create(to=user, from_=from_number, body=message_body)
