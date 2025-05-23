const mongoose = require("mongoose");
require("dotenv").config();

const dbConnect = () => {
    return mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log(" Successfully connected to MongoDB");
    })
    .catch((error) => {
        console.log(" Issue in DB connection");
        console.error(error.message);
        process.exit(1);
    });
};

module.exports = dbConnect;
