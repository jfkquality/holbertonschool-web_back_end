#!/usr/bin/env python3

from flask import Flask, jsonify, request, abort, make_response
from auth import Auth

AUTH = Auth()

app = Flask(__name__)


@app.route('/', methods=['GET'], strict_slashes=False)
def hello():
    """ basic route """
    return jsonify({"message": "Bienvenue"})


@app.route('/users', methods=['POST'], strict_slashes=False)
def users() -> str:
    """ Add/Authenticate user """
    try:
        user = AUTH.register_user(request.form['email'],
                                  request.form['password'])
        return jsonify({"email": user.email, "message": "user created"})
    except ValueError:
        return jsonify({"message": "email already registered"}), 400


@app.route('/sessions', methods=['POST'], strict_slashes=False)
def login() -> str:
    """ Login function """
    # d = request.form
    if AUTH.valid_login(request.form['email'],
                        request.form['password']):
        email = request.form['email']
        pwd = request.form['password']
        sess = AUTH.create_session(email)
        form = {"email": email, "message": "logged in"}
        resp = make_response(form)
        resp.set_cookie('session_id', sess)
        return jsonify(resp)
    else:
        abort(401)


if __name__ == "__main__":
    app.run(host="0.0.0.0", port="5000")
