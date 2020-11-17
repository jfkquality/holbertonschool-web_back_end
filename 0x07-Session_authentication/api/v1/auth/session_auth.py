#!/usr/bin/env python3
""" class SessionAuth. """

from api.v1.auth.auth import Auth
from models.user import User
from typing import List, TypeVar
import base64
import uuid
import os


class SessionAuth(Auth):
    """ class SessionAuth. """
    user_id_by_session_id = {}

    def create_session(self, user_id: str = None) -> str:
        """ create session method. """
        if user_id is None or not isinstance(user_id, str):
            return None
        sess_id = str(uuid.uuid4())
        SessionAuth.user_id_by_session_id[sess_id] = user_id
        return sess_id

    def user_id_for_session_id(self, session_id: str = None) -> str:
        """ user id for session id. """
        if session_id is None or not isinstance(session_id, str):
            return None
        return SessionAuth.user_id_by_session_id.get(session_id)

    def current_user(self, request=None):
        """ override Auth current_user """
        cookie = self.session_cookie(request)
        user_id = self.user_id_for_session_id(cookie)
        return User.get(user_id)
