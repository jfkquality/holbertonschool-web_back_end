#!/usr/bin/env python3
""" 8. Complex types - functions """
from typing import List, Union, Tuple, Callable


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    """ return a float """
    def func(a: float) -> float:
        return (a * multiplier)
    return (func)
