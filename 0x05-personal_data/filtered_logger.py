#!/usr/bin/env python3
""" 0. Regex-ing """

import re
import logging
import mysql-connector
from typing import List
from os import environ as e

PII_FIELDS = ('name', 'email', 'phone', 'ssn', 'password')


def filter_datum(fields: List[str], redaction: str, message: str,
                 separator: str) -> str:
    """ returns the log message obfuscated. """
    for f in fields:
        message = re.sub(r'(' + f + '=).+?' + separator,
                         r'\1' + redaction + separator, message)
    return message


def get_logger() -> logging.Logger:
    """ get logger object """
    log = logging.getLogger('user_data')
    log.propagate = False
    log.setLevel(logging.INFO)
    formatter = RedactingFormatter(fields=(PII_FIELDS))
    handler = logging.StreamHandler()
    handler.setFormatter(formatter)
    log.addHandler(handler)
    return log


def get_db() -> mysql.connector.connection.MySQLConnection:
    """ Get connector to db """
    u = e.PERSONAL_DATA_DB_USERNAME
    p = e.PERSONAL_DATA_DB_PASSWORD
    h = e.PERSONAL_DATA_DB_HOST
    db = e.PERSONAL_DATA_DB_NAAME
    # sql = mysql.connector.connect()

    return mysql.connector.connect(user=u,
                                   password=p,
                                   host=h,
                                   database=db)


class RedactingFormatter(logging.Formatter):
    """ Redacting Formatter class
        """

    REDACTION = "***"
    FORMAT = "[HOLBERTON] %(name)s %(levelname)s %(asctime)-15s: %(message)s"
    SEPARATOR = ";"

    def __init__(self, fields: List[str]):
        """ Constructor """
        super(RedactingFormatter, self).__init__(self.FORMAT)
        self.fields = fields

    def format(self, record: logging.LogRecord) -> str:
        """ format method """
        record.msg = filter_datum(self.fields, self.REDACTION,
                                  record.getMessage(), self.SEPARATOR)
        return super().format(record)
