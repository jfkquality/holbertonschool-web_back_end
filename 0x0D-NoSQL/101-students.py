#!/usr/bin/env pytho3
""" 14. Top students """

def top_students(mongo_collection):
    """ returns all students sorted by average score """
    return mongo_collection.aggregate({
        "$group": {"avg_score": {avg: core}
        }
    })
