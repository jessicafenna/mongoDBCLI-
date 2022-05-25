const yargs = require("yargs")

exports.addMovie = async (movieObj, collection) => { 
        const response = await collection.insertOne({title: movieObj.title}); 
    // you created movie object from yargs object so this shouldn't be yargs object 
    if (response.acknowledge){ 
        console.log ("Successfully added")
    } else {
        console.log ("Something wrong")
    }
}

