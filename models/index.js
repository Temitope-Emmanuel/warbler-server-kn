const mongoose = require("mongoose");
mongoose.set("debug", true);
mongoose.Promise = Promise;

const PORT = process.env.MONGOLAB_URI || "mongodb://localhost/yelpcampv9"

const connectDB = async () => {
    try {
    const connection = await mongoose.connect(
    PORT,
    {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: true,
    useUnifiedTopology: true
    }
    )
    } catch (error) {
    console.log(`MongoDB error when connecting: ${error}`);
    }
    }
    connectDB()









module.exports.User = require("./user");
module.exports.Message = require("./message");
