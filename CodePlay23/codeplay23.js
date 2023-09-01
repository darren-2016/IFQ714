const sqlite3 = require('sqlite3');

let database = new sqlite3.Database("Chinook_Sqlite.sqlite", function(error) {
    if (error) {
        console.log(`Failed to connect to Chinook database: ${error.message}`);
    } else {
        console.log("Connected to Chinook database");
    }
});

database.close();
