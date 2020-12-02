#!/usr/bin/env python3
"""630. 0x0B. Redis basic """

import redis
import uuid
from typing import Any


class Cache():
    """ Cache class """
    def __init__(self):
        """ 0. Writing strings to Redis """
        self._redis = redis.Redis()
        self._redis.flushdb()

    def store(data: Any[str, bytes, int, float]) -> str:
        """ Create key; store data in redis """
        key = str(uuid.uuid4())
        self._redis.set(key, data)
        return key
