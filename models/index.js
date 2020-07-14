const mongoose = require("mongoose");
mongoose.set("debug", true);
mongoose.Promise = Promise;

const PORT = process.env.MONGOLAB_URI || "mongodb://localhost/yelpcampv9"

// console.log(PORT)

mongoose.connect(PORT,{
    keepAlive:true,
    useUnifiedTopology:true,
    useNewUrlParser:true
});









module.exports.User = require("./user");
module.exports.Message = require("./message");
