#!/usr/bin/env python3
""" Pagination function
"""

from typing import Tuple


def index_range(page: int, page_size: int) -> Tuple[int, int]:
    """Return 2 member tuple of start, end index
    """

    return ((page - 1) * page_size, page * page_size)
