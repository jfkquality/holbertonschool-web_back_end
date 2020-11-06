#!/usr/bin/env python3
""" Hash a password """

import bcrypt


def hash_password(password: str) -> bytes:
    """ Create salted hashed password """

    return bcrypt.hashpw(bytes(password, 'utf-8'), bcrypt.gensalt())


def is_valid(hashed_password: bytes, password: str) -> bool:
    """ Check valid password """

    if bcrypt.checkpw(password.encode(), hashed_password):
        return True
    else:
        return False
