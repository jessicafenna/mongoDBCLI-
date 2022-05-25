const yargs = require ("yargs");
const {client, connection} = require ("./db/connection");
const {addMovie, listMovies} = require ("./utils");

const app = async (yargsObj) =>{ 
    // this will call the connection function and will be able to call connection - need to be able to use collection (opening connection)
    const collection = await connection();
    try{
        if (yargs.add){ 
            // add movie to mongodb
            // await collection.insertOne({title: yargsObj.title})
            console.log("added")
            await addMovie({title:yargsObj.title}, collection);
        }
        else if (yargsObj.list){ 
            // list movies from mongodb
            await listMovies (collection);
        }
        else { 
            console.log("incorrect command")
        }
    } catch (error){ 
        console.log (error)
    }
    // close - database method
    await client.close();
};

exports.listMovies = async (collection) =>{ 
    const movies = await collection.find().toArray();
}
app(yargs.argv);