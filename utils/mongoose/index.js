const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/ShoppingScrapping', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then((res)=>{
  console.log('Connected Successfully');
}).catch((error)=>{
  console.log('Error in MongoDb connection');
})