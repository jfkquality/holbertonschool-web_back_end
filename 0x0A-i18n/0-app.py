#!/usr/bin/env python3

from flask import Flask, render_template
from flask_babel import Babel

app = Flask(__name__)
# from app import routes

babel = Babel(app)


@app.route('/')
def index():
    title = "Welcome to Holberton"
    header = "Hello World!"
    return render_template(templates/0-index.html, title=title, header=header)


if __name__ == "__main__":
    app.run(host="0.0.0.0", port="5000")
