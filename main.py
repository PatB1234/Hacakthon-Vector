from fastapi import FastAPI, Form, status, Depends
from fastapi.security.oauth2 import OAuth2
from fastapi.staticfiles import StaticFiles
from fastapi.responses import RedirectResponse, HTMLResponse
from fastapi.templating import Jinja2Templates
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
import sqlite3 as driver
import ai, time
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

DATABASE_URL = 'db/database.db'
app = FastAPI()
origins = ['null']
path = 'http://localhost:5173'
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class User(BaseModel):

    email: str = ""
    password: str = ""

class hackerInfo(BaseModel):

    browser: str
    ip: str


def create_tables():

    database = driver.connect(DATABASE_URL)
    cursor = database.cursor()
    cursor.execute(
        "CREATE TABLE IF NOT EXISTS USERS (EMAIL TEXT, PASSWORD TEXT, NAME TEXT, ROLE INT)")
    cursor.execute(
        "CREATE TABLE IF NOT EXISTS HACK_INF (BROWSER STR, IP STR)")


def add_user():

    database = driver.connect(DATABASE_URL)
    cursor = database.cursor()
    cursor.execute(
        f"INSERT INTO USERS (Email, Password, Name, Role) VALUES ('admin@techcompany.com', 'admin', 'admin', '0');")
    cursor.execute(
        f"INSERT INTO USERS (Email, Password, Name, Role) VALUES ('john@techcompany.com', 'mypassword1234', 'John', '1');")
    database.commit()


@app.post("/admin_login")
def admin_login(details: User):
    database = driver.connect(DATABASE_URL)
    cursor = database.cursor()
    try:

        cursor.execute("SELECT * FROM USERS")
        records = cursor.fetchall()
        for record in records:
            if record[3] == 0 and record[0] == details.email:
                print(
                    f"\033[91mSystem Error Detected Activating AI: {ai.begin()}\033[0m")
                time.sleep(5)
                print("\033[92mApplying fix...\033[0m")
                return "AI ACTIVATED"

    except:

        database.rollback()

    return "Login Successful"

@app.post("/log_hacker")
def log_hacker(details: hackerInfo):

    database = driver.connect(DATABASE_URL)
    cursor = database.cursor()
    cursor.execute(
        f"INSERT INTO HACK_INF (BROWSER, IP) VALUES ('{details.browser}' ,'{details.ip}');")

    database.commit()


create_tables()
add_user()