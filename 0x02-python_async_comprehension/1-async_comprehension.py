#!/usr/bin/env python3
""" 0. Async Generator Comprehensions  """

import asyncio
import random
from typing import Generator, List

async_generator = __import__('0-async_generator').async_generator


async def async_comprehension() -> List[float]:
    """ Yield list of random numbers btwn 0-10 """
    result = [i async for i in async_generator() if i < 10]
    return result
