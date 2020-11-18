#!/usr/bin/env python3
""" 0. User model """

import requests
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import Column, Integer, String
from flask import Flask

app = Flask(__name__)
Base = declarative_base()


class User(Base):
    """ User model """
    __tablename__ = 'users'

    id = Column(Integer, primary_key=True, nullable=False, unique=True)
    email = Column(String(250), nullable=False)
    hashed_password = Column(String(250), nullable=False)
    session_id = Column(String(250), nullable=True)
    reset_token = Column(String(250), nullable=True)
