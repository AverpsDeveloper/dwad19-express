const express = require('express');
const MongoClient = require("mongodb").MongoClient;

const app = express();
async function connect (uri,dbname){
    let client = await MongoClient.connect(uri,{
        useUnifiedTopology: true
    })
    return client;
    }
    require('dotenv').config();

    console.log(process.env);
async function main(){
    const client = await connect ()
}

app.get('/',function(req,res){
    res.send("hello world")
})

app.listen(3000,function(){
    console.log("server has started");
})
