#!/usr/bin/env python3
""" Auth """

import bcrypt

# class Auth:
#     """ Auth class """


def _hash_password(password):
    """ hash password """
    salt = bcrypt.gensalt()
    return bcrypt.hashpw(password.encode(), salt)
