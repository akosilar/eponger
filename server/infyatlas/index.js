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

    
main().catch(err => console.log(err));

async function main() {
    const Player = mongoose.model("Player",{lName: String, fName: String, rating: Number, email: String});

    const lars = new Player({lname: 'austero', fname: 'lars', rating: 1400, email: 'janlarsaustero@gmail.com'});
    await lars.save().then(() => console.log('player entered'));
    const result = await Player.find({email:'janlarsaustero@gmail.com'});
    console.log(result);

    
    
}
    


process.exit(-1);