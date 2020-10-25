#!/usr/bin/python3
""" 0-main """
BaseCaching = __import__('base_caching').BaseCaching


class BasicCache(BaseCaching):
    """ Basic Cache class """

    def put(self, key, item):
        """ Setter method """
        self.cache_data[key] = item

    def get(self, key):
        """ Getter method """
        if key in self.cache_data and key is not None:
            return self.cache_data[key]
        return None
