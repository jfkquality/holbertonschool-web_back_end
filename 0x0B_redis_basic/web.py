#!/usr/bin/env python3
""" 5. Implementing an expiring web cache and tracker  """

import requests
# from exercise import Cache
Cache = __import__('exercise').Cache

cache = Cache()


def get_page():
    """ track how many times a particular URL was accessed """
    pass
