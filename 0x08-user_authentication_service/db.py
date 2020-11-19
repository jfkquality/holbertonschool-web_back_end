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
    """ DB Class """

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

    def find_user_by(self, **kwargs) -> User:
        """ find user by kwargs """
        sess = self._session
        result = sess.query(User).filter_by(**kwargs).first()
        if not result:
            raise NoResultFound()
        else:
            return result
        raise InvalidRequestError()

    def update_user(self, user_id: int, **kwargs) -> None:
        """ update user with kwargs """
        user = self.find_user_by(id=user_id)
        sess = self._session
        for key in kwargs.keys():
            if key not in User.__table__.columns:
                raise ValueError()
        sess.query(User).filter(user_id == user.id).update(kwargs)
        sess.commit()
