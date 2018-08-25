const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err)
  {
    return console.log('unable to connect to server');
  }
  console.log('connnected to MongoDB server');
  const db = client.db('TodoApp')

  // db.collection('Todos').deleteMany({text : 'hey law'}).then((result) =>{
  //   console.log(result);
  // }, err =>{
  //   console.log('failed to delete form todos', err);
  // });

  // db.collection('Todos').deleteOne({ text : 'hey law'}).then((result) => {
  //   console.log(result);
  // }, (err) => {
  //   console.log("unalbe to delete from Todos");
  // });

  db.collection('Users').findOneAndDelete({ _id : new ObjectID('5b8113112a627b08f8ffa2f6')}).then ((result) => {
    console.log(JSON.stringify(result, undefined, 2));
  }, err => {
    console.log("unable to delete from Users");
  });
client.close();
});
