#!/usr/bin/env python3
""" 3. Tasks. """

import asyncio
import random
import time
from typing import List

wait_random = __import__('0-basic_async_syntax').wait_random


def task_wait_random(max_delay: int) -> asyncio.Task:
    """ Return asyncio.Task  """
    return(asyncio.Task(wait_random(max_delay)))
