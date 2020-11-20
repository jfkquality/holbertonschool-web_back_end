#!/usr/bin/env python3
"""
Main file
"""
from db import DB
from user import User
from auth import Auth

from sqlalchemy.exc import InvalidRequestError
from sqlalchemy.orm.exc import NoResultFound


my_db = DB()
auth = Auth()

email = "test@test.com"
password = "PwdHashed"
user = auth.register_user(email, password )
print(user.id)
sess = auth.create_session(email)
user = auth.get_user_from_session_id(sess)
print(user.id)

print("----")

email = "test2@test.com"
password = "PwdHashed2"
user = auth.register_user(email, password )
print(user.id)
sess = ""
try:
    user = auth.get_user_from_session_id(sess)
    print(user.id)
except Exception as e:
    print(e)

print("----")

email = "test3@test.com"
password = "PwdHashed3"
user = auth.register_user(email, password )
print(user.id)
sess = "None"
try:
    user = auth.get_user_from_session_id(sess)
    print(user.id)
except Exception as e:
    print(e)


# find_user = my_db.find_user_by(email="test@test.com")
# print(find_user.id)

# try:
#     find_user = my_db.find_user_by(email="test2@test.com")
#     print(find_user.id)
# except NoResultFound:
#     print("Not found")

# try:
#     find_user = my_db.find_user_by(no_email="test@test.com")
#     print(find_user.id)
# except InvalidRequestError:
#     print("Invalid")


#!/usr/bin/env python3
# """
# Main file
# """
# from auth import Auth

# email = 'bob@bob.com'
# password = 'MyPwdOfBob'
# auth = Auth()

# auth.register_user(email, password)

# print(auth.create_session(email))
# print(auth.create_session("unknown@email.com"))
