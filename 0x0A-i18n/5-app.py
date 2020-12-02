#!/usr/bin/env python3
""" 0. Basic Flask app """
from flask import Flask, render_template, g, request
from flask_babel import Babel, gettext

app = Flask(__name__)
# from app import routes

babel = Babel(app)

users = {
    1: {"name": "Balou", "locale": "fr", "timezone": "Europe/Paris"},
    2: {"name": "Beyonce", "locale": "en", "timezone": "US/Central"},
    3: {"name": "Spock", "locale": "kg", "timezone": "Vulcan"},
    4: {"name": "Teletubby", "locale": None, "timezone": "Europe/London"},
}


class Config():
    """ Babel  Config class """
    LANGUAGES = ["en", "fr"]
    BABEL_DEFAULT_LOCALE = 'en'
    BABEL_DEFAULT_TIMEZONE = "UTC"


config = Config()
app.config.from_object(config)


@app.route('/')
def index():
    """ Main page """
    title = "Welcome to Holberton"
    header = "Hello World"
    return render_template('5-index.html', title=title, header=header)


@babel.localeselector
def get_locale():
    """ Get locale """
    locale = request.args.get("locale")
    if locale:
        if locale in config.LANGUAGES:
            return locale
    return request.accept_languages.best_match(config.LANGUAGES)


def get_user():
    user = request.args.get('login_as')
    if not user:
        if user not in users:
            return None
    return users[user]


@app.before_request
def before_request():
    g.user = get_user


if __name__ == "__main__":
    app.run(host="0.0.0.0", port="5000")
