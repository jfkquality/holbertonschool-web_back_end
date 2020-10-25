#!/usr/bin/python3
""" 0. Basic dictionary  """
BaseCaching = __import__('base_caching').BaseCaching


class BasicCache(BaseCaching):
    """ Basic Cache class """

    def put(self, key, item):
        """ Setter method """
        if key is None or item is None:
            return None
        self.cache_data[key] = item

    def get(self, key):
        """ Getter method """
        if key in self.cache_data and key is not None:
            return self.cache_data[key]
        return None
