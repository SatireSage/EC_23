import warnings

warnings.filterwarnings("ignore")
from twilio.rest import Client
from dotenv import load_dotenv
import os
from flask import Flask, request, jsonify
from flask_cors import CORS

link = "https://satiresage.github.io/EC_23/location"


app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "https://satiresage.github.io/EC_23/"}})


@app.route("/process_phone_number", methods=["POST"])
def process_phone_number():
    try:
        data = request.get_json()
        phone_number = data["phone_number"]

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
        message_body = "Please proceed to the nearest evacuation center. For guidance visit {}".format(
            link
        )

        for user in users:
            message = client.messages.create(
                to=user, from_=from_number, body=message_body
            )

        # Perform some operation with the phone number (replace this with your logic)
        result = f"Received phone number: {phone_number}"

        return jsonify({"result": result})

    except Exception as e:
        return jsonify({"error": str(e)}), 500


if __name__ == "__main__":
    app.run(debug=True, port=5000)
