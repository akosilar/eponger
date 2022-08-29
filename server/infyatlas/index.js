const mongoose = require("mongoose");

const dbURL = "mongodb+srv://root:kp9pwxnbx7ahANPhhYLD@cluster0.1e4lsm5.mongodb.net/ePonger?retryWrites=true&w=majority";

const connectionParams = {
        useNewUrlParser: true,
        useUnifiedTopology: true
};

mongoose
    .connect(dbURL, connectionParams)
    .then (()=>{
        console.info("Connected to the DB")
    }).catch((e)=>{
        console.log("Error:", e);
    });