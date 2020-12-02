#!/usr/bin/env python3
"""630. 0x0B. Redis basic """

import types
import redis
import uuid
from typing import Union, Callable


class Cache():
    """ Cache class for Redis """
    def __init__(self):
        """ 0. Writing strings to Redis """
        self._redis = redis.Redis()
        self._redis.flushdb()

    def store(self, data: Union[str, bytes, int, float]) -> str:
        """ Create key; store data in redis """
        key = str(uuid.uuid4())
        self._redis.set(key, data)
        return key

    def get(self, key: str, fn: Callable = None) -> str:
        """ 1. Reading from Redis and recovering original type """
        r = self._redis
        if not key:
            return None
        if not callable(fn):  # type(fn) is not types.FunctionType:
            # print ("FN", fn, "VALUE", r.get(key))
            return r.get(key)
        return r.get(key).decode("utf-8")
