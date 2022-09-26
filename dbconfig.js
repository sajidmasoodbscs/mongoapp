const mongoose = require("mongoose");
// mongoose.set('useFindAndModify', false);



const connectionstr=process.env.DATABASE;
const options={
    useUnifiedTopology:process.env.useUnifiedTopology,
    useNewUrlParser:process.env.useNewUrlParser,
    Poolsize:process.env.Poolsize
}
let db;
mongoose.connect(connectionstr,options).then((dbobj)=>{
    console.log("Database connected successfully");
    db=mongoose.connection;
}).catch((err)=>{
    console.log("Error in database connection :", err);
})



module.exports={
    'db':db,
    'poolsize':100
}