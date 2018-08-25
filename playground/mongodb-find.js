const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err)
  {
    return console.log('unable to connect to server');
  }
  console.log('connnected to MongoDB server');
  const db = client.db('TodoApp')

  // db.collection('Todos').find(
  //   {
  //   _id : new ObjectID('5b80f23be2fdc8067a727dc5')
  //   }
  //   ).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('unable to fetch docs')
  // });

//   db.collection('Todos').find().count().then((count) => {
//     console.log('Todos');
//     console.log(`count = ${count}`);
//   }, err => {
//     console.log('unable to fetch todos', err);
//   });
//
//   client.close();
// });

db.collection('Users').find({name: 'law'}).toArray().then((docs) => {
  console.log(JSON.stringify(docs, undefined, 2));
}, (err) => {
  console.log('unable to fetch users')

});
client.close();
});
