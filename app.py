from flask import Flask, render_template, request, redirect
from src.chatbot import *

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('home.html')
    

@app.route('/signup')
def signup():
    return render_template('signup.html')

@app.route('/login')
def login():
    return render_template('login.html')

@app.route('/get_response/<query>')
def retreive_respone(query):
    print(query)
    response = get_response(query)

    print(response)

    response_json = {"text": response}
    return response_json


@app.route('/process_login', methods=['POST'])
def process_login():
    data = request.json
    print(data)
    
    if (data['username'] == 'korymartin' and data['password'] == '12345'):
        response = {'status':'success'}
    else:
        response = {'status':'fail'}    


    return response

@app.route('/process_signup', methods=['POST'])
def process_signup():
    data = request.json
    print(data)
    
    response = {'status':'success'}

    return redirect('/')

@app.route('/test')
def test():
    return render_template('test.html')

if __name__ == "__main__":
    app.run(debug=True)