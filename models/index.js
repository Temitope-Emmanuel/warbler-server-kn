const mongoose = require("mongoose");
mongoose.set("debug", true);
mongoose.Promise = Promise;

const PORT = process.env.MONGOLAB_URI || "mongodb://localhost/yelpcampv9"

console.log(PORT)

const connectDB = async () => {
    try {
    const connection = await mongoose.connect(
    PORT,
    {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: true,
    useUnifiedTopology: false
    }
    )
    console.log(PORT)
    console.log(`MongoDB connected: ${connection.connection.host}`);
    } catch (error) {
    console.log(`MongoDB error when connecting: ${error}`);
    }
    }
    connectDB()









module.exports.User = require("./user");
module.exports.Message = require("./message");
