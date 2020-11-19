#!/usr/bin/env python3
""" DB class """

from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from sqlalchemy.exc import InvalidRequestError
from sqlalchemy.orm.exc import NoResultFound

from user import Base
from user import User


class DB:

    def __init__(self):
        """ Constructor """
        self._engine = create_engine("sqlite:///a.db", echo=False)
        Base.metadata.drop_all(self._engine)
        Base.metadata.create_all(self._engine)
        self.__session = None

    @property
    def _session(self):
        """ Getter """
        if self.__session is None:
            DBSession = sessionmaker(bind=self._engine)
            self.__session = DBSession()
        return self.__session

    def add_user(self, email: str, hashed_password: str) -> User:
        """ Add user """
        sess = self._session
        usr = User(email=email, hashed_password=hashed_password)
        sess.add(usr)
        sess.commit()
        return usr

    # def find_user_by(self, **kwargs):
    #     sess = self._session
    #     for k, v in kwargs.items():
    #         # print("KEY:", k, "VALUE:", v)
    #         key = getattr(User, k)
    #         # print("SESSION QUERY KEY:", sess.query(key).
    # filter_by(email=str(v)))
    #         if not sess.query(key).filter(key==v):
    #             raise NoResultFound()
    #         if sess.query(key).filter(key==v):
    #             return sess.query(key).filter(key==v)
    #     # return sess.query(User, key)
    #     # raise InvalidRequestError()
