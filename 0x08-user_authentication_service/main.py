#!/usr/bin/env python3

import requests


def register_user(email: str, password: str) -> None:
    """ reg user """
    pass


def log_in_wrong_password(email: str, password: str) -> None:
    """ log in with wrong pw """
    pass


def log_in(email: str, password: str) -> str:
    """ log in """
    pass


def profile_unlogged() -> None:
    """ unlog profile """
    pass


def profile_logged(session_id: str) -> None:
    """ log profile """
    pass


def log_out(session_id: str) -> None:
    """ logout """
    pass


def reset_password_token(email: str) -> str:
    """ reset pw """
    pass


def update_password(email: str, reset_token: str, new_password: str) -> None:
    """ update pw """
    pass
