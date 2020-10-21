#!/usr/bin/env python3
""" 12/102. Type Checking  """
from typing import List, Union, Tuple,  Any, Mapping, TypeVar

T = TypeVar('T', bound=Any)


def zoom_array(lst: Tuple, factor: int = 2) -> List:
    """ Sample code for 12/102 """
    zoomed_in: List = [
        item for item in lst
        for i in range(factor)
    ]
    return zoomed_in


array = [12, 72, 91]

zoom_2x = zoom_array(tuple(array))

zoom_3x = zoom_array(tuple(array), 3)
