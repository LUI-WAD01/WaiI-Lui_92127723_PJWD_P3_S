// NodeJS provides the require funciton (whose job is to load modules and give access to their exports).
// Require is similar to keywords like import or include.
// Stores a reference (a pointer) in the constant name "express".
// Requries the Express module and puts it in a variable.
const express = require('express');
// Requires CORS(Cross-Origin Resource Sharing) - an HTTP-header based mechanism implemented by the browser
// which allows a server or an API to indicate any origins (e.g. protocol, hostname, port) other than its origin 
// (gets permission to access and load resources).
const cors = require('cors');
// Requires Body-parser - a middleware responsible for parsing the incoming request bodies before handle it.
const bodyParser = require('body-parser');
// Requires SQLite and its driver.
const sqlite3Driver = require("sqlite3");
const sqlite = require("sqlite");
// Create variable for database.
var db;
// Create an async function with an anonymous function for using the database.
(async () => {
    // db is now initialised.
    db = await sqlite.open({
        // Specify the file name for the database.
        filename: 'items.db',
        // Specify the driver.
        driver: sqlite3Driver.Database
    });
})();

// Calls the express function "express()".
const app = express();
// Enable cors.
app.use(cors());
// Enable body-parser in json format.
app.use(bodyParser.json());
// Requests will reach this route after passing thorugh the middleware.
// A prefill database for the personal list.
app.get("/prefillDatabase", async (request, response) => {
    // Create a table with the name "todoT" with column "items" in TEXT datatype in the database.
    await db.run("CREATE TABLE todoT (items TEXT)");
    // Insert value "sleep" into the column "items" of table "todoT" inside the database.
    await db.run("INSERT INTO todoT (items) VALUES('sleep')");
    // Tell the web server to stop proccessing the script and return the following statement.
    response.end("Database has been created successfully!");
});

// Requests will reach this route after passing thorugh the middleware.
// A prefill database for the business list.
app.get("/prefillDatabase_b", async (request, response) => {
    // Create a table with the name "todoTB" with column "itemsB" in TEXT datatype in the database.
    await db.run("CREATE TABLE todoTB (itemsB TEXT)");
    // Insert value "job" into the column "itemsB" of table "todoTB" inside the database.
    await db.run("INSERT INTO todoTB (itemsB) VALUES('job')");
    // Tell the web server to stop proccessing the script and return the following statement.
    response.end("Database has been created successfully!");
});

// Requests will reach this route after passing thorugh the middleware.
// To get all the current items of the personal list which located in the database.
app.get("/getAllItems", async (request, response) => {
    // Select all items from table "todoT" inside the database.
    const result = await db.all('SELECT * FROM todoT');
    // Response in json format.
    response.json(result);
});

// Requests will reach this route after passing thorugh the middleware.
// To get all the current items of the business list which located in the database.
app.get("/getAllItems_b", async (request, response) => {
    // Select all items from table "todoTB" inside the database.
    const result = await db.all('SELECT * FROM todoTB');
    // Response in json format.
    response.json(result);
});

// Requests will reach this route after passing thorugh the middleware.
// To add an item into the personal list which located in the database.
app.post("/addItem", async (request, response) => {
    // Get the item from user request.
    const itemName = request.body["items"];
    // To write a message to the console with the content of the item.
    console.log("Item is: " + itemName);
    // Insert user request content to the column "items" of table "todoT" in the database.
    await db.run("INSERT INTO todoT (items) VALUES(?)", itemName);
    // Response in json format if success.
    response.json({"status": "success"});
});

// Requests will reach this route after passing thorugh the middleware.
// To add an item into the business list which located in the database.
app.post("/addItem_b", async (request, response) => {
    // Get the item from user request.
    const itemName = request.body["itemsB"];
    // To write a message to the console with the content of the item.
    console.log("Item is: " + itemName);
    // Insert user request content to the column "itemsB" of table "todoTB" in the database.
    await db.run("INSERT INTO todoTB (itemsB) VALUES(?)", itemName);
    // Response in json format if success.
    response.json({"status": "success"});
});

// Requests will reach this route after passing thorugh the middleware.
// To delete an item from the personal list which located in the database.
app.delete("/deleteItem", async (request, response) => {
    // Get the item from user request.
    const itemName = request.body["items"];
    // To write a message to the console with the content of the item.
    console.log("Item to delete is: " + itemName);
    // Delete user request content from the column "items" of table "todoT" in the database.
    await db.run("DELETE FROM todoT WHERE items = ?", itemName);
    // Response in json format if success.
    response.json({"status": "success"});
});

// Requests will reach this route after passing thorugh the middleware.
// To delete an item from the business list which located in the database.
app.delete("/deleteItem_b", async (request, response) => {
    // Get the item from user request.
    const itemName = request.body["itemsB"];
    // To write a message to the console with the content of the item.
    console.log("Item to delete is: " + itemName);
    // Delete user request content from the column "itemsB" of table "todoTB" in the database.
    await db.run("DELETE FROM todoTB WHERE itemsB = ?", itemName);
    // Response in json format if success.
    response.json({"status": "success"});
});

// Requests will reach this route after passing thorugh the middleware.
// To update the content of an item from the personal list which located in the database.
app.put("/updateItem", async (request, response) => {
    // Get the old content of the request item.
    const oldItemName = request.body["oldItemName"];
    // Get the new content of the request item.
    const newItemName = request.body["newItemName"];
    // Replace the old content on the column "items" of table "todoT" in the database with the new request content.
    await db.run("UPDATE todoT SET items = ? WHERE items = ?", newItemName, oldItemName);
    // Response in json format if success.
    response.json({"status": "success"});
});

// Requests will reach this route after passing thorugh the middleware.
// To update the content of an item from the business list which located in the database.
app.put("/updateItem_b", async (request, response) => {
    // Get the old content of the request item.
    const oldItemName = request.body["oldItemName"];
    // Get the new content of the request item.
    const newItemName = request.body["newItemName"];
    // Replace the old content on the column "itemsB" of table "todoTB" in the database with the new request content.
    await db.run("UPDATE todoTB SET itemsB = ? WHERE itemsB = ?", newItemName, oldItemName);
    // Response in json format if success.
    response.json({"status": "success"});
});

// Requests will reach this route after passing thorugh the middleware.
// To check and response if the user input match any items of the two lists in the database or not.
// "listName" in the router will be replace with user request content later on.
app.get("/list/:listName", async (request, response) => {
    // To check if the user request item is within the column "items" of table "todoT" in the database or not.
    const resultFromPersonal = await db.all("SELECT * FROM todoT WHERE items = '"+ request.params["listName"] +"'");
    // To check if the user request item is within the column "itemsB" of table "todoTB" in the database or not.
    const resultFromBusiness = await db.all("SELECT * FROM todoTB WHERE itemsB = '"+ request.params["listName"] +"'");
	// If the result from table "todoT" (personal list) is more than 0 in length 
    // and the result from table "todoTB" (business list) is more than 0 in length as well,
    if (resultFromPersonal.length > 0 && resultFromBusiness.length > 0) {
        // response in json format, set the field "whichlist" to the following statement.
        response.json({"whichlist":"todoT List and todoTB List"});
	}
    // If the result from table "todoTB" is more than 0 in length,
    else if(resultFromBusiness.length > 0) {
        // response in json format, set the field "whichlist" to the following statement.
        response.json({"whichlist":"todoTB List"});
    }
    // If the result from table "todoT" is more than 0 in length,
    else if(resultFromPersonal.length > 0) {
        // response in json format, set the field "whichlist" to the following statement.
        response.json({"whichlist":"todoT List"});
    }
    // If not in any of the above cases,
    else{
        // response in json format, set the field "whichlist" to the following statement.
        response.json({"whichlist":"not in List"});
    }
});

// The server is listening on port 3000.
app.listen(3000, () => {
    // To write a message to the console with the following statement.
    console.log("The server is listening on port 3000");
})