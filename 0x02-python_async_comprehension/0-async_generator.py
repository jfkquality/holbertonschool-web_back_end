#!/usr/bin/env python3
""" 0. Async Generator """

import asyncio
import random


async def async_generator() -> Generator[float]:
    """ Yield randmom number btwn 0-10 """
    for i in range(10):
        await asyncio.sleep(1)
        yield random.uniform(0, 10)
