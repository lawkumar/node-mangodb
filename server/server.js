
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/MongooseApp');

var todo = mongoose.model('Todo', {
  text: {
    type: String,
    required: true,
    minlength: 1,
    trim : true

  },
  completed : {
    type: Boolean,
    default : false

  },
  completedAt: {
    type: Number,
    default: null
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

// var otherTodo = new todo({
//   text : ' hey savu  ',
//   //completed : true,
//   //completedAt : 234
// });
//
// otherTodo.save().then((doc) => {
//   console.log(doc);
// }, error => {
//   console.log("unable to save otherTodo");
// });

var User = mongoose.model('User', {

  email : {
    type : String,
    minlength : 1,
    trim: true,
    required : true
  }

});

var user = new User ({
  email: "  lawkumar9@gmail.com  "
});

user.save().then((doc) => {
  console.log(doc);
}, e => {
  console.log("unable to save todo");
});
