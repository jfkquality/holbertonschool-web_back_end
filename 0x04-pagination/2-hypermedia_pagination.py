#!/usr/bin/env python3
""" Pagination function
"""

import csv
import math
from typing import List, Tuple


def index_range(page: int, page_size: int) -> Tuple[int, int]:
    """Return 2 member tuple of start, end index
    """

    return ((page - 1) * page_size, page * page_size)


class Server:
    """Server class to paginate a database of popular baby names.
    """
    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        self.__dataset = None

    def dataset(self) -> List[List]:
        """Cached dataset
        """
        if self.__dataset is None:
            with open(self.DATA_FILE) as f:
                reader = csv.reader(f)
                dataset = [row for row in reader]
            self.__dataset = dataset[1:]

        return self.__dataset

    def get_page(self, page: int = 1, page_size: int = 10) -> List[List]:
        """ Get a page """
        assert (isinstance(page, int) and isinstance(page_size, int))
        assert (page > 0 and page_size > 0)

        range = index_range(page, page_size)

        f = self.dataset()

        return f[range[0]:range[1]]

    def get_hyper(self, page: int = 1, page_size: int = 10) -> List[List]:
        """ Return page info """
        range = index_range(page, page_size)
        f = self.dataset()
        if page + 1 >= math.ceil(len(f)) / page_size:
            next_page = None
        else:
            next_page = page + 1
        if page - 1 <= 0:
            prev_page = None
        else:
            prev_page = page - 1
        return {
            'page_size': page_size,
            'page': page,
            'data': self.get_page(page, page_size),
            'next_page': next_page,   # page + 1, # range[0]
            'prev_page': prev_page,   # page - 1,  #range[0],
            'total_pages': math.ceil(len(f) / page_size)
            }
