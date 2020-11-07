#!/usr/bin/env python3
""" Creat Auth class """

import os
from typing import List, TypeVar
from flask import request


class Auth:
    """ Auth class """
    def require_auth(self, path: str, excluded_paths: List[str]) -> bool:
        """ require autho method """
        if path is None:
            return True
        if excluded_paths is None or not excluded_paths:
            return True
        path = os.path.join(path, '')
        if path in excluded_paths:
            return False
        return True

    def authorization_header(self, request=None) -> str:
        """ auth header method """
        if request is None:
            return None
        if 'Authorization' not in request.headers:
            return None
        return request.headers('Authorization')

    def current_user(self, request=None) -> TypeVar('User'):
        """ current user method """
        return None
