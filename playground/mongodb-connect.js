const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err)
  {
    return console.log('unable to connect to server');
  }
  console.log('connnected to MongoDB server');
  const db = client.db('TodoApp')
  // db.collection('Todos').insertOne({
  //   text: 'something to do',
  //   completed: false
  // }, (err, result) => {
  //   if (err)
  //   {
  //     return console.log('unable to insert todo', err);
  //   }
  //
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  db.collection('Users').insertOne({
    name: 'law kumar',
    age: 26,
    location: 'noida'

  }, (err, result) => {
    if (err)
    {
      return console.log('unable to add a new collection');
    }
    console.log(JSON.stringify(result.ops, undefined, 2));
    //console.log('sucessfully added new collection to DB');
  });
  client.close();
});
