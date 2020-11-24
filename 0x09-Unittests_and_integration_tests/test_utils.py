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

# import unittest


class TestAccessNestedMap(unittest.TestCase):
    """ 0. Parameterize a unit test """
    @parameterized.expand([
        ({"a": 1}, ("a",), 1),
        ({"a": {"b": 2}}, ("a",), {"b": 2}),
        ({"a": {"b": 2}}, ("a", "b"), 2)
    ])
    def test_access_nested_map(self, nested_map, path, expect):
        """ test access nested map utils function """
        self.assertEqual(access_nested_map(nested_map, path), expect)


if __name__ == '__main__':
    unittest.main()
