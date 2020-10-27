#!/usr/bin/python3
""" 3. LRU caching """
from collections import OrderedDict
BaseCaching = __import__('base_caching').BaseCaching


class LRUCache(BaseCaching):
    """ Basic Cache class """

    def __init__(self):
        """ Override superclass __init__ """
        self.cache_data = OrderedDict()

    def put(self, key, item):
        """ Setter method """
        self.cache_data[key] = item
        self.cache_data.move_to_end(key)
        # print("CACHE {}".format(self.cache_data))
        if len(self.cache_data) > BaseCaching.MAX_ITEMS:
            # last = list(self.cache_data.keys())[-1]
            # last = list(self.cache_data.keys())[0]
            # self.cache_data.pop(last)
            last = self.cache_data.popitem(last=False)
            print("DISCARD: {}".format(last[0]))

    def get(self, key):
        """ Getter method """
        if key in self.cache_data and key is not None:
            self.cache_data.move_to_end(key)
            return self.cache_data[key]
        return None
