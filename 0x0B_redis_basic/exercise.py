#!/usr/bin/env python3
"""630. 0x0B. Redis basic """

import types
import redis
import uuid
from typing import Union, Callable
from functools import wraps


def count_calls(method: Callable) -> Callable:
    """ count calls decorator function """
    key = method.__qualname__
    @wraps(method)
    def wrapper(self, *args, **kwargs):
        """ wrapper function """
        self._redis.incr(key)
        return method(self, *args, **kwargs)
    return wrapper


class Cache():
    """ Cache class for Redis """
    def __init__(self):
        """ 0. Writing strings to Redis """
        self._redis = redis.Redis()
        self._redis.flushdb()

    @count_calls
    def store(self, data: Union[str, bytes, int, float]) -> str:
        """ Create key; store data in redis """
        key = str(uuid.uuid4())
        self._redis.set(key, data)
        return key

    def get(self, key: str, fn: Callable = None) -> str:
        """ 1. Reading from Redis and recovering original type """
        r = self._redis
        value = r.get(key)  # Default get if key is None
        if not callable(fn):
            return value
        return fn(value)

    def get_str():
        """Get string from redis db."""
        pass

    def get_int():
        """Get int from redis db."""
        pass
