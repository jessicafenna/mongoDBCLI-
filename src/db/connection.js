
// this file is connecting the database to the app 

// gives access to dotenv files 
require ("dotenv").config();
const { MongoClient } = require("mongodb")

// instead of using const and exporting at end - use exports makes function and exports it DRY 
// mongo client is a class constructor
const client = new MongoClient(process.env.MONGO_URI);
// instead of pasting your URL which everyone could see - use env and ignore so no one can access it 
// this doesn't connect it, just shows where it is 

// this next has to be async - we need to watch for something outside the app
const connection = async () =>{
    try { 
        // wait to connect to database
        await client.connect();
        // create a space in your database to store something in your database, call it the plural of what you will be storing (and with capital letter):
        const db = client.db("Movies");

        // an individual movie has been put in the above movies database
        return db.collection("Movie");
    } catch (error){ 
        console.log(error);
    }}

module.exports = {client, connection}

