import getpass
import os
from langchain_openai import ChatOpenAI
from langchain_core.prompts import PromptTemplate
from langchain_core.messages import SystemMessage, HumanMessage
from dotenv import load_dotenv

load_dotenv()
os.getenv("OPENAI_API_KEY")

messages = []


model = ChatOpenAI(model="gpt-4o-mini")

system_message = "You are a helpful assistant. Your name is Shannon"

def get_response(query):
    user_message = HumanMessage(query)
    messages.append(user_message)
    response = model.invoke(messages)
    messages.append(response)
    return response.content


