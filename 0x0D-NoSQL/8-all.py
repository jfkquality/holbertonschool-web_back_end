#!/usr/bin/env python3
""" 8. List all documents in Python """

from pymongo import MongoClient


def list_all(mongo_collection):
    client = MongoClient('mongodb://127.0.0.1:27017')
    db = client["mongo_collection"]
    return db.mongo_collection.find()
