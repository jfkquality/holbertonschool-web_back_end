#!/usr/bin/env python3
""" test_access_nested_map Unit test class """

from typing import (
    Mapping,
    Sequence,
    Any,
    Dict,
    Callable,
)
import unittest
import requests
from utils import access_nested_map, get_json
from parameterized import parameterized, parameterized_class
from unittest.mock import Mock, patch

anm = access_nested_map
gj = get_json


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


class TestGetJson(unittest.TestCase):
    """ Test utils Get Json function """
    @parameterized.expand([
        ("http://example.com", {"payload": True}),
        ("http://holberton.io", {"payload": False})
    ])
    def test_get_json(self, url, payload):
        """ 2. Mock HTTP calls """
        with patch('utils.requests.get') as mock_get:
            mock_get.return_value.json.return_value = payload
            # res = gj(url)
            self.assertEqual(gj(url), payload)
            mock_get.assert_called_once()


class TestMemoize(unittest.TestCase):
    """ 3. Parameterize and patch """
    def test_memoize():
        """ memoize test class """
        @patch('utils.memoize')
        class TestClass:
            """ test class """

            def a_method(self):
                """ a method """
                return 42

            @memoize
            def a_property(self):
                """ a property """
                return self.a_method()

    with @patch('utils.a_property') as mock_prop:
        pass


if __name__ == '__main__':
    unittest.main()
