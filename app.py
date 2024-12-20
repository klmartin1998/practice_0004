from flask import Flask, render_template, request
from src.chatbot import *

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('home.html')
    


@app.route('/get_response/<query>')
def retreive_respone(query):
    print(query)
    response = get_response(query)

    print(response)

    response_json = {"text": response}
    return response_json


@app.route('/test')
def test():
    return render_template('test.html')

if __name__ == "__main__":
    app.run(debug=True)