
// use 628Practice
// db
// db.createCollection('users')
// db.users.insertMany([
//   { name: "user1", age: 39, email: "user1@example.com" },
//   { name: "user2", age: 33, email: "user2@example.com" },
//   { name: "user3", age: 29, email: "user3@example.com" },
//   { name: "user4", age: 30, email: "user4@example.com" },
// ]);

// db.users.find();

// db.users.find({
//   age: { $gt: 30 },
// });

// db.users.find({
//   age: { $lte: 30 },
// });

// db.users.find({
//   age: { $eq: 39 },
// });

// update user
// db.users.updateOne({ name: "user4" }, { $set: { age: 66 } });

// db.users.updateOne(
//     {name: 'user1'}, {$set : {name: 'Pratik Patel'}}
// )
// db.users.find();

// 9.	The db.users.deleteOne({ name: 'user2' }) command is used to delete
//  a single user profile from the "users" collection.
// It removes the document with the name "user2" from the collection.

// db.users.deleteOne(
//     {name: 'user4'}
// )

// CalculaTE THE AVERAGE age of the users
// db.users.aggregate([
//     {$group: {
//       _id: null,
//       aveAge: { $avg : '$age'}
//       }
//     }
// ])

// to create an ascending index on the "email" field of the "users" collection

// db.users.createIndex({
//     email:1
// })

// Create a text index for efficient text searches.
// db.users.createIndex({ name: 'text', email:'text'});
// db.users.find({
//     $text: { $search: 'user1'}
// })

// Retrieve users sorted by age in decending order
// db.users.find().sort({
//     age: -1
// })

// Retrieve  a limited number of users with pagination.
// db.users.find().limit(2).skip(1);


// // Group and count users by age
// db.users.aggregate([
//     {$group : {_id: '$age', count: { $sum: 1 } } },
//     { $sort: {
//       _id: 1
//     } }
// ])

// Find the oldest and youngest users
// db.users.aggregate([
//     { $group: {
//       _id: null,
//       maxAge : {
//         $max: '$age'
//       }, minAge : {$min : '$age'}
//     }}
// ])

// Geospatial Queries:  find places within a certain radius
// db.places.find();
// db.places.insertMany([
//   { name: "Park A", location: { type: "Point", coordinates: [0, 0] } },
//   { name: "Park B", location: { type: "Point", coordinates: [1, 1] } },
//   { name: "Park C", location: { type: "Point", coordinates: [2, 2] } },
//   { name: "Park D", location: { type: "Point", coordinates: [3, 3] } }
// ]);
// db.places.find();
// db.places.createIndex({
//     location: '2dsphere'
// })

// db.places.find({
//     location: {
//         $nearSphere: {
//             $geometry : {
//                 type: 'Point',
//                 coordinates: [0,0]
//             },
//             $maxDistance: 2000 // meteres
//         }
//     }
// })

// find  users.with name starting with 'u' or 'C'
// db.users.find(
//     {
//         $or: [
//             { name: { $regex: '^u', $options: 'i' } },
//             { name: { $regex: '^C', $options: 'i' } }
//         ]
//     }
// )

// Calculate total age by grouping documents by null
// db.users.aggregate([
//     { $group: {
//       _id: null,
//       totalAge: {
//         $sum: '$age'
//       }
//     }}
// ])

// drop the users collections
// db.createCollection("users");
// db.users.insertMany([
//   { name: "user1", age: 39, email: "user1@example.com" },
//   { name: "user2", age: 33, email: "user2@example.com" },
//   { name: "user3", age: 29, email: "user3@example.com" },
//   { name: "user4", age: 30, email: "user4@example.com" },
// ]);

// show collections
// db.users.drop()



