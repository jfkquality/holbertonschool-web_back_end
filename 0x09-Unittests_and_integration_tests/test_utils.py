#!/usr/bin/env python3
""" test_access_nested_map Unit test class """

from utils import access_nested_map
import unittest
from parameterized import parameterized, parameterized_class
from typing import (
    Mapping,
    Sequence,
    Any,
    Dict,
    Callable,
)

anm = access_nested_map


class TestAccessNestedMap(unittest.TestCase):
    """ test access nested map utils function """
    @parameterized.expand([
        ({"a": 1}, ("a",), 1),
        ({"a": {"b": 2}}, ("a",), {"b": 2}),
        ({"a": {"b": 2}}, ("a", "b"), 2)
    ])
    def test_access_nested_map(self, nested_map, path, expect):
        """ 0. Parameterize a unit test """
        self.assertEqual(anm(nested_map, path), expect)

    @parameterized.expand([
        ({}, ("a",)),
        ({"a": 1}, ("a", "b"))
    ])
    def test_access_nested_map_exception(self, nested_map, path):
        """" 1. Parameterize a unit test """
        with self.assertRaises(KeyError):
            anm(nested_map, path)


if __name__ == '__main__':
    unittest.main()
