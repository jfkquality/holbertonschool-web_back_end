#!/usr/bin/env python3
""" Basic Auth class """

import base64
from api.v1.auth.auth import Auth


class BasicAuth(Auth):
    """ Basic Autho class """

    def extract_base64_authorization_header(self,
                                            authorization_header: str) -> str:
        """ extract header """
        if authorization_header is None:
            return None
        if not isinstance(authorization_header, str):
            return None
        if not authorization_header.startswith("Basic "):
            return None
        return authorization_header[6:]

    def decode_base64_authorization_header(
            self, base64_authorization_header: str) -> str:
        """ Decode auth header """
        if base64_authorization_header is None:
            return None
        if not isinstance(base64_authorization_header, str):
            return None
        b64 = base64_authorization_header
        try:
            b64_a = b64.encode('utf-8')
            b64_b = base64.b64decode(b64_a)
            b64_c = b64_b.decode('utf-8')
            return b64_c
        except Exception:
            return None

    def extract_user_credentials(
            self, decoded_base64_authorization_header: str) -> (str, str):
        """ extract credentials """
        if decoded_base64_authorization_header is None:
            return (None, None)
        if not isinstance(decoded_base64_authorization_header, str):
            return (None, None)
        if ":" not in decoded_base64_authorization_header:
            return (None, None)
        colon =  decoded_base64_authorization_header.find(":")
        decoded_b64 = decoded_base64_authorization_header
        return  (decoded_b64[:colon], decoded_b64[colon + 1:])
