const express=require('express');
const app=express();
const {db}=require("./dbconfig");
const serverconfig=require("./Accountconfig");
const bodyParser=require('body-parser');
const cors=require('cors');


app.use(express.json());
app.use(bodyParser.urlencoded({extended: true })); //if false then parse only strings
app.use(bodyParser.json());
app.use(cors());

app.listen(serverconfig.serverconfiguration.SERVER_PORT,()=>{
    console.log(`Running on http://${serverconfig.serverconfiguration.SERVER_HOST}:${serverconfig.serverconfiguration.SERVER_PORT}`)
})






