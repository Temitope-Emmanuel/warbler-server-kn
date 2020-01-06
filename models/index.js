const mongoose = require("mongoose");
mongoose.set("debug", true);
mongoose.Promise = Promise;

// const uri = "mongodb+srv://Temitope:drowssap@warblercluster-jsojs.mongodb.net/test?retryWrites=true&w=majority"

mongoose.connect(process.env.MONGOLAB_URI);



// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://<username>:<password>@warblercluster-jsojs.mongodb.net/test?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true,useUnifiedTopology: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });



// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://Temitope:drowssap@warblercluster-jsojs.mongodb.net/test?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { 
//   useNewUrlParser: true,useUnifiedTopology:true 
//  });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });



module.exports.User = require("./user");
module.exports.Message = require("./message");
