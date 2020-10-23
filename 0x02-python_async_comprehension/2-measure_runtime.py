#!/usr/bin/env python3
""" 2. Run time for four parallel comprehensions  """

import asyncio
import random
import time
from typing import Generator, List

async_comprehension = __import__('1-async_comprehension').async_comprehension


async def measure_runtime() -> float:
    """ Return total elapsed time """
    start = time.perf_counter()
    await asyncio.gather(async_comprehension(),
                         async_comprehension(),
                         async_comprehension())
    return time.perf_counter() - start
