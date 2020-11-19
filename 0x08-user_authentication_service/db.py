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

    def find_user_by(self, **kwargs):
        """ find user by kwargs """
        sess = self._session
        result = sess.query(User).filter_by(**kwargs).first()
        if not result:
            raise NoResultFound()
        else:
            return result
        raise InvalidRequestError()
