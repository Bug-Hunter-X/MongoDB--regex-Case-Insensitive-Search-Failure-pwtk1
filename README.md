# MongoDB $regex Case-Insensitive Search Failure

This repository demonstrates a bug encountered when performing a case-insensitive regular expression search using the `$regex` operator in MongoDB. The issue arises when the case of characters in the pattern does not match the case in the data.

## Bug Description

The `$regex` operator is used with the `i` flag for case-insensitive matching. However, in certain scenarios, when the case in the regular expression does not exactly match the case in the database data, no results are returned. This bug can lead to unexpected behavior in applications that rely on case-insensitive searches.

## Bug Reproduction

1.  Set up a MongoDB collection with documents containing strings such as: `{"field": "TestString"}`
2.  Execute a query like `db.collection.find({ field: { $regex: /teststring/i } })`.
3.  Observe that the query returns no results even though the case differs only.

## Solution

Ensure the case of the regular expression matches the case in the data. Alternatively, use a case-insensitive search function that handles variations in case for accurate results.  The solution provided uses a case-insensitive comparison to retrieve the correct results.