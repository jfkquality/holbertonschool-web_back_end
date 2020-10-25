#!/usr/bin/python3
""" 1. FIFO caching """
from collections import OrderedDict
BaseCaching = __import__('base_caching').BaseCaching


class FIFOCache(BaseCaching):
    """ Basic Cache class """

    def put(self, key, item):
        """ Setter method """
        if key is None or item is None:
            return None
        self.cache_data[key] = item
        if len(self.cache_data) > BaseCaching.MAX_ITEMS:
            od = OrderedDict(self.cache_data)
            last = list(od.keys())[-1]
            self.cache_data.pop(last)
            print("DISCARD: ", last)

    def get(self, key):
        """ Getter method """
        if key in self.cache_data and key is not None:
            return self.cache_data[key]
        return None
