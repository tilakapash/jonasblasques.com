# Flask as Netlify Function

from flask_app import app


def handler(event, context):
    with app.test_client() as client:
        response = client.get("/")
        return {
            "statusCode": response.status_code,
            "headers": {"Content-Type": "application/json"},
            "body": response.get_data(as_text=True)
        }

