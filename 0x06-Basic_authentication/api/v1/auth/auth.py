#!usr/bin/env python3
""" Creat Auth class """

from flask import request

def Class Auth:
    """ Auth class """
    def require_auth(self, path: str, excluded_paths: List[str]) -> bool:
        """ require autho method """
        return False

    def authorization_header(self, request=None) -> str:
        """ auth header method """
        return None

    def current_user(self, request=None) -> TypeVar('User'):
        """ current user method """
        return None
