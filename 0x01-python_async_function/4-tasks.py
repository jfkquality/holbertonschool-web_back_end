#!/usr/bin/env python3
""" 4. Tasks """

import asyncio
import random
from typing import List

task_wait_random = __import__('3-tasks').task_wait_random


async def task_wait_n(n: int, max_delay: int = 10) -> List[float]:
    """ Run aWait n times concurrently """

    result: List = []

    for f in asyncio.as_completed(
            [task_wait_random(max_delay) for i in range(n)]):
        result1 = await f
        result.append(result1)

    return result
