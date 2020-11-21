#!/usr/bin/env python3
"""
Main file
"""
from auth import Auth

email = 'bob@bob.com'
password = 'MyPwdOfBob'
auth = Auth()

auth.register_user(email, password)

try:
    print(auth.update_password('asdfasdfasdfasdf', 'kkjhlkuiyhhlsdf'))
except ValueError:
    print("Value error")


# print(auth.create_session(email))
# print(auth.create_session("unknown@email.com"))


# email = 'bob@bob.com'
# password = 'MyPwdOfBob'
# auth = Auth()

# auth.register_user(email, password)

# print(auth.valid_login(email, password))

# print(auth.valid_login(email, "WrongPwd"))

# print(auth.valid_login("unknown@email", password))
