from flask import Flask, jsonify, request

app = Flask(__name__)

# Dummy recommend endpoint
@app.route("/ml/recommend", methods=["GET"])
def recommend():
    # normally you'd run ML model here
    dummy_data = {
        "recommendations": [
            {"product": "CeraVe Cleanser", "score": 0.95},
            {"product": "La Roche-Posay Sunscreen", "score": 0.89}
        ]
    }
    return jsonify(dummy_data)

# Dummy chat endpoint
@app.route("/ml/chat", methods=["POST"])
def chat():
    user_message = request.json.get("message", "")
    dummy_response = {
        "user_message": user_message,
        "bot_reply": "This is a dummy ML chat response."
    }
    return jsonify(dummy_response)

if __name__ == "__main__":
    app.run(port=8000, debug=True)