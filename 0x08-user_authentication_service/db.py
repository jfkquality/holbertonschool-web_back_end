#!/usr/bin/env python3
""" DB class """

from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

from user import Base
from user import User


class DB:

    def __init__(self):
        """ Constructor """
        self._engine = create_engine("sqlite:///a.db", echo=True)
        Base.metadata.drop_all(self._engine)
        Base.metadata.create_all(self._engine)
        self.__session = None

    @property
    """ Getter """
    def _session(self):
        if self.__session is None:
            DBSession = sessionmaker(bind=self._engine)
            self.__session = DBSession()
        return self.__session

    def add_user(self, email, hashed_password):
        """ Add user """
        sess = self._session
        user = User(email=email, hashed_password=hashed_password)
        sess.add(user)
        sess.commit()
        return user
