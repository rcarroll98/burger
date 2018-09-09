var connection = require("./connection.js");

var orm = {
    selectAll: function(whatToSelect, table){
        var queryString = "SELECT ?? FROM ??"
        connection.query(queryString, [whatToSelect, table], function(err, result) {
            if (err) throw err;
            console.log(result);
        });
    },
    insertOne: function(tableInput){
        var queryString = "INSERT INTO ?? SET *"
        connection.query(queryString, [tableInput])
    },
    updateOne: function(table, whatToUpdate, idOfCol){
        var queryString = "UPDATE ?? SET ?? WHERE ? = *"
        connection.query(queryString, [table, whatToUpdate, idOfCol ], function(err, result){
            if (err) throw err;
            console.log(result);
        })
    }
}

module.exports = orm;