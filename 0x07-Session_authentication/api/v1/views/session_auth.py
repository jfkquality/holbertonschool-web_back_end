#!/usr/bin/env python3
""" Module of Sesseion Auth views
"""

import os
from api.v1.views import app_views
from flask import abort, jsonify, request
from models.user import User
# from auth import SessionAuth


@app_views.route('/auth_session/login', methods=['POST'], strict_slashes=False)
def auth_login():
    """ authorize login """
    email = request.form.get('email')
    pwd = request.form.get('password')

    if (not (email and email.strip())):
        return jsonify({"error": "email missing"}), 400

    if (not (pwd and pwd.strip())):
        return jsonify({"error": "password missing"}), 400

    # (= POST /api/v1/auth_session/login
    #  path = os.path.join(path, '')

    users = User.search({"email": email})
    if not users:
        return jsonify({"error": "no user found for this email"}), 404
    # for user in users:
    if not users.is_valid_password(user_pwd):
        return jsonify({"error": "wrong password"}), 401
        # break

    from api.v1.app import auth
    sess_id = auth.create_session(users.id)
    return users.to_json()


def create_user() -> str:
    """ POST /api/v1/users/
    JSON body:
      - email
      - password
      - last_name (optional)
      - first_name (optional)
    Return:
      - User object JSON represented
      - 400 if can't create the new User
    """
    rj = None
    error_msg = None
    try:
        rj = request.get_json()
    except Exception as e:
        rj = None
    if rj is None:
        error_msg = "Wrong format"
    if error_msg is None and rj.get("email", "") == "":
        error_msg = "email missing"
    if error_msg is None and rj.get("password", "") == "":
        error_msg = "password missing"
    if error_msg is None:
        try:
            user = User()
            user.email = rj.get("email")
            user.password = rj.get("password")
            user.first_name = rj.get("first_name")
            user.last_name = rj.get("last_name")
            user.save()
            return jsonify(user.to_json()), 201
        except Exception as e:
            error_msg = "Can't create User: {}".format(e)
    return jsonify({'error': error_msg}), 400
