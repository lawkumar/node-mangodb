
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/MongooseApp');

var todo = mongoose.model('Todo', {
  text: {
    type: String
  },
  completed : {
    type: Boolean
  },
  completedAt: {
    type: Number
  }
});

// var newTodo = new todo({
//   text: 'hey savu'
// });
//
// newTodo.save().then((doc) =>{
//   console.log('Saved todo', doc);
// }, e => {
//   console.log("unable to save todo");
// });

var otherTodo = new todo({
  text : 'hey suvu',
  completed : true,
  completedAt : 234
});

otherTodo.save().then((doc) => {
  console.log(doc);
}, error => {
  console.log("unable to d=save otherTodo");
});
