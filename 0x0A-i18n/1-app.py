#!/usr/bin/env python3
""" 0. Basic Flask app """
from flask import Flask, render_template
from flask_babel import Babel

app = Flask(__name__)
# from app import routes

babel = Babel(app)


class Config():
    """ Babel  Config class """
    LANGUAGES = ["en", "fr"]
    BABEL_DEFAULT_LOCALE = 'en'
    BABEL_DEFAULT_TIMEZONe = "UTC"


config = Config()
app.config.from_object(config)


@app.route('/')
def index():
    """ Main page """
    title = "Welcome to Holberton"
    header = "Hello World"
    return render_template('0-index.html', title=title, header=header)


if __name__ == "__main__":
    app.run(host="0.0.0.0", port="5000")
