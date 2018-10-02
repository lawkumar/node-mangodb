const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err)
  {
    return console.log('unable to connect to server');
  }
  console.log('connnected to MongoDB server');
  const db = client.db('TodoApp')

  // db.collection('Todos').findOneAndUpdate({
  // _id : new ObjectID('5b80f23be2fdc8067a727dc5')
  // },{
  //   $set : {
  //     completed : true
  //   }
  // }, {
  //   returnOriginal : false
  // }).then ((result) => {
  //   console.log(result);
  // });

  db.collection('Users').findOneAndUpdate({
  _id : new ObjectID('5b8118fb35544db39aa1ab7d')
  },{
    $set : {
      name : "savu chauhan"
    },
    $inc : {
      age : -1
    }
  }, {
    returnOriginal : false
  }).then ((result) => {
    console.log(result);
  });
client.close();
});
