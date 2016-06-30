/*
The following JavaScript examples are meant to be run inside the Mongo shell, after the > prompt.
Alternatively, you can run this code inside RoboMongo.
*/







// INSERTING DOCUMENTS

db.students.insert({
  name: 'DeeAnn',
  links: {
    website: 'http://www.deeannkendrick.com/',
    github: 'https://github.com/dkendrick25'
  },
  gender: 'female',
  projects: ['Rate the Throne', 'Draw Together', 'Tic Tac Toe', 'Movie App'],
  points: 7
})

db.students.insert({
  name: 'Kyle',
  links: {
    website: 'http://kyleluck.com/',
    github: 'https://github.com/kyleluck'
  },
  gender: 'male',
  projects: ['SentiMotion', 'Draw Together', 'Tic Tac Toe', 'Movie App'],
  prizes: 6
})










// OPTIONAL: db.getCollection('students') instead of db.students

db.getCollection('students').insert({
  name: 'Cody',
  links: {
    github: 'https://github.com/codybarber'
  },
  gender: 'male',
  projects: ['Rate the Throne', 'Draw Together', 'Tic Tac Toe', 'Movie App'],
  points: 11
})










// FIND ALL DOCUMENTS

db.students.find()
/*
Output:
{ "_id" : ObjectId("57750271a166f20a864f907a"), "name" : "DeeAnn", "homePage" : "http://www.deeannkendrick.com/", "githubUrl" : "https://github.com/dkendrick25", "gender" : "female" }
{ "_id" : ObjectId("57750271a166f20a864f907b"), "name" : "Kyle", "homePage" : "http://kyleluck.com/", "githubUrl" : "https://github.com/kyleluck", "gender" : "male" }
{ "_id" : ObjectId("57750271a166f20a864f907c"), "name" : "Cody", "githubUrl" : "https://github.com/codybarber", "gender" : "male" }
*/











// .pretty() will print the results in a more readable format

db.students.find().pretty()
/*
Output:
{
	"_id" : ObjectId("57750271a166f20a864f907a"),
	"name" : "DeeAnn",
	"homePage" : "http://www.deeannkendrick.com/",
	"githubUrl" : "https://github.com/dkendrick25",
	"gender" : "female"
}
{
	"_id" : ObjectId("57750271a166f20a864f907b"),
	"name" : "Kyle",
	"homePage" : "http://kyleluck.com/",
	"githubUrl" : "https://github.com/kyleluck",
	"gender" : "male"
}
{
	"_id" : ObjectId("57750271a166f20a864f907c"),
	"name" : "Cody",
	"githubUrl" : "https://github.com/codybarber",
	"gender" : "male"
}
*/




// QUERY SELECTORS

// Find all
db.students.find()
db.students.find({})

// Find by exact match
db.students.find({ name: 'DeeAnn'})
db.students.find({ gender: 'male' })

// Greater Than and Less than
db.students.find({ points: { $gt: 10 }})
db.students.find({ points: { $lt: 5 }})

// And and Or conditional logic
db.students.find({ $and: [ {points: { $gt: 5 } }, {points: { $lt: 10 } }]})

// Find by matching nested property
db.students.find({ 'links.website': 'http://kyleluck.com/' })

// You can even match by values in an array
db.students.find({ projects: 'Rate the Throne'})
// Regular expressions. normal searches will be case sensitive.
db.students.find({ projects: /rate the throne/i})
//Find by ObjectId
db.albums.find({_id: ObjectId("577532a51cafee135c87c677")})











// UPDATING A DOCUMENT

db.students.update(
  { name: 'DeeAnn' },                         // selector
  {                                           // replace with this document
    name: 'DeeAnn',
    links: {
      website: 'http://www.deecoder.com/',
      github: 'https://github.com/dkendrick25'
    },
    gender: 'female',
    points: 10
  }
)












// UPDATING SPECIFIC FIELDS ONLY

db.students.update(
  { name: 'DeeAnn'},     // selector
  {
    $set: {              // update only these fields
      'links.website': 'http://www.deecoder.com/',
      points: 10
    }
  }
)





// UPSERTS
// a special kind of update that will try to update a document matching a selector, but if no document matches the selector, it will create a document and apply the supplied updates to it.

db.students.update(
  { name: 'Regan' },            // selector
  {
    $set: {
      links: {
        github: 'https://github.com/rrgn'
      },
      gender: 'male',
      projects: ['SentiMotion', 'Draw Together', 'Tic Tac Toe', 'Movie App']
    }
  },                            // fields to update
  { upsert: true }              // if regan is not there, add him, if already there, update only
)











// UPDATE MULTIPLE DOCUMENTS

db.students.update(
  { projects: 'SentiMotion' },               // selector
  { $set: { frontEndProjectWinner: true } }, // fields to set
  { multi: true }                            // perform this update on multiple documents
)













// Removing all documents

db.students.remove({})

// Removing only DeeAnn
db.students.remove({ name: 'DeeAnn' })


















// Get the count of the students
db.students.count()
// Get the count of male students (selector)
db.students.count({ gender: 'male' })










// FIN
