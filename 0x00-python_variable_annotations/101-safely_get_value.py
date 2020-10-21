#!/usr/bin/env python3
""" 11/101. More involved type annotations """
from typing import List, Union, Tuple,  Any, Mapping, TypeVar

T = TypeVar('T', bound=Any)


def safely_get_value(dct: Mapping, key: Any,
                     default: Union[T, None] = None) -> Union[Any, T]:
    """ Use TypeVar """
    if key in dct:
        return dct[key]
    else:
        return default
