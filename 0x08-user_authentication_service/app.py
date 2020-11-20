#!/usr/bin/env python3

from flask import Flask, jsonify, request, abort, make_response
from auth import Auth

Auth = Auth()

app = Flask(__name__)


@app.route('/', methods=['GET'], strict_slashes=False)
def hello():
    """ basic route """
    return jsonify({"message": "Bienvenue"})


@app.route('/users', methods=['POST'], strict_slashes=False)
def users() -> str:
    """ Add/Authenticate user """
    try:
        user = Auth.register_user(request.form['email'],
                                  request.form['password'])
        return jsonify({"email": user.email, "message": "user created"})
    except ValueError:
        return jsonify({"message": "email already registered"}), 400


@app.route('/sessions', methods=['POST'], strict_slashes=False)
def login():
    """ Login function """
    email = request.form['email']
    password = request.form['password']
    if Auth.valid_login(email, password):
        sess = Auth.create_session(email)
        form = {"email": email, "message": "logged in"}
        resp = make_response(jsonify(form))
        resp.set_cookie('session_id', sess)
        return resp
    else:
        abort(401)

    # data = request.form
    # if AUTH.valid_login(data['email'], data['password']):
    #     sess = AUTH.create_session(data['email'])
    #     resp = make_response({"email": data['email'],
    #                           "message": "logged in"})
    #     resp.set_cookie("session_id", sess)
    #     return resp
    # else:
    #     abort(401)


if __name__ == "__main__":
    app.run(host="0.0.0.0", port="5000")
