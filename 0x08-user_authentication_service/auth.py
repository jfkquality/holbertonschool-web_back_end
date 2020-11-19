#!/usr/bin/env python3

import bcrypt
from db import DB
from user import User
from sqlalchemy.exc import InvalidRequestError
from sqlalchemy.orm.exc import NoResultFound


class Auth:
    """ Auth class """

    def __init__(self):
        self._db = DB()

    def register_user(self, email: str, password: str) -> User:
        """ Add/register user if not exist """
        try:
            user = self._db.find_user_by(email=email)
            raise ValueError('User {} already exists'.format(email))
        except NoResultFound:
            hpwd = _hash_password(password)
            return self._db.add_user(email, hpwd)


def _hash_password(password: str) -> str:
    """ hash password """
    salt = bcrypt.gensalt()
    return bcrypt.hashpw(password.encode(), salt)
