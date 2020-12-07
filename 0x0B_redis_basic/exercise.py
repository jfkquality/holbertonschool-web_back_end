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


def call_history(method: Callable) -> Callable:
    """ track method call history """
    ins = method.__qualname__ + ":inputs"
    outs = method.__qualname__ + ":outputs"
    @wraps(method)
    def wrapper(self, *args, **kwargs):
        """ add ins and outs to lists """
        self._redis.rpush(ins, str(args))
        output = method(self, *args, **kwargs)
        self._redis.rpush(outs, output)
        return output
    return wrapper


def replay():
    """ 4. Retrieve lists: display history of calls of a function. """
    pass


class Cache():
    """ Cache class for Redis """
    def __init__(self):
        """ 0. Writing strings to Redis """
        self._redis = redis.Redis()
        self._redis.flushdb()

    @count_calls
    @call_history
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
