#!/usr/bin/env python3
""" 0. Regex-ing """

import re
from typing import List


def filter_datum(
        fields: List,
        redaction: str,
        message: str,
        separator: str
) -> str:
    """ returns the log message obfuscated. """
    for f in fields:
        message = re.sub(r'(' + f + '=).+?' + separator,
                         r'\1' + redaction + separator, message)
    return message
