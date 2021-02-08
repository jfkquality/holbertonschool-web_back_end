#!/usr/bin/env pytho3
""" 14. Top students """


def top_students(mongo_collection):
    """ returns all students sorted by average score """
    avg_score = mongo_collection.aggregate([
        {"$unwind": "$topics"},
        {"$group":
         {
             "_id": "$name",
             "averageScore": {"$avg": "$topics.score"}
         }},
        {"$sort": {"averageScore": -1}},
        {"$project":
         {
             "_id": 1,
             "name": 1,
             "averageScore": 1
         }}
    ])

    # , function(err, out) { res.send(out) }

    # for i in avg_score:
    #     print(i)
    return avg_score
