#!/usr/bin/env pytho3
""" 14. Top students """


def top_students(mongo_collection):
    """ returns all students sorted by average score """
    students = [x for x in mongo_collection.find()]
    for student in students:
        scores = [x.get('score', 0) for x in student.get('topics', [])]
        avg = 0
        for score in scores:
            avg = avg + score
        avg = avg / len(scores)
        student["averageScore"] = avg
    return sorted(students, key=lambda z: z["averageScore"], reverse=True)

    # avg_score = mongo_collection.aggregate([
    #     {"$unwind": "$topics"},
    #     {"$group":
    #      {
    #          "_id": "$name",
    #          "averageScore": {"$avg": "$topics.score"}
    #      }},
    #     {"$sort": {"averageScore": -1}},
    #     {"$project":
    #      {
    #          "_id": 1,
    #          "name": 1,
    #          "averageScore": 1
    #      }}
    # ])

    # # , function(err, out) { res.send(out) }

    # # for i in avg_score:
    # #     print(i)
    # return avg_score
