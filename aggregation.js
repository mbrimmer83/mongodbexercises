/*
MongoDB Aggregation Framework
*/
//sum all pop values
db.zipcodes.aggregate([
{ $group: { _id: '$zipcodes',  total: { $sum: "$pop" } }}
])





// Count the number of male students vs female students

db.students.aggregate([
  { $group: { _id: '$gender', total: { $sum: 1 }}}
])










// Count the total points of male students vs female students
db.students.aggregate([
  { $group: { _id: '$gender', total: { $sum: '$points' }}}
])






// Average the total points of male students vs female students
db.students.aggregate([
  { $group: { _id: '$gender', average: { $avg: '$points' }}}
])




// Total and average total points of male students vs female students
db.students.aggregate([
  { $group: { _id: '$gender', total: { $sum: '$points' }, average: { $avg: '$points' }}}
])











// Count the number of students who worked on each project

// Step 1
db.students.aggregate([
  { $unwind: '$projects' }
])
// Step 2
db.students.aggregate([
  { $unwind: '$projects' },
  { $group: { _id: '$projects', total: { $sum: 1 } }}
])










// Filter the data set first using $match
// Return the male students
db.students.aggregate([
  { $match: { gender: 'male' } }
])

// Count the number of male students who worked on each project
db.students.aggregate([
  { $match: { gender: 'male' } },
  { $unwind: '$projects' },
  { $group: { _id: '$projects', total: { $sum: 1 } }}
])




// Sorting, the previous result, highest first
db.students.aggregate([
  { $match: { gender: 'male' } },
  { $unwind: '$projects' },
  { $group: { _id: '$projects', total: { $sum: 1 } }},
  { $sort: { total: -1 } }
])


// Take the top 3 projects only
db.students.aggregate([
  { $match: { gender: 'male' } },
  { $unwind: '$projects' },
  { $group: { _id: '$projects', total: { $sum: 1 } }},
  { $sort: { total: -1 } },
  { $limit: 3 }
])
