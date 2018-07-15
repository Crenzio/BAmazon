var dotenv = require('dotenv');
require('dotenv').config(); 

var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,

    user: "Root",

    password: process.env.THISPASSWORD,
    database: "bamazon"
});

var connection2 = mysql.createConnection({
    host: "localhost",
    port: 3306,

    user: "Root",

    password: process.env.THISPASSWORD,
    database: "bamazon"
});

connection.connect(function (err) {
    if (err) throw err;
    intro();
});

function intro() {
    console.log("\n"
        + "  FRANK: Hi, I'm Frank. This is my partner, Dave. \n\n"
        + "  DAVE: S'up? \n\n"
        + "  FRANK: The two of us sell 'completely legitimate' artistic and entertainment products, ranging from books and movies which 'fell off a truck'... \n ...to one-of-a-kind masterpieces which were 'acquired' for us by our highly reputable 'art thieves.' \n\n"
        + "  DAVE: Dammit Frank! You were supposed to say 'associates' instead of 'art thieves.' C'mon man, we rehearsed this! \n\n"
        + "  FRANK: Right, right. Our 'aassociates.' That's who 'stole' the paintings for us. \n\n"
        + "  DAVE: Don't say 'stole' you stupid fu- \n\n"
        + "  FRANK: Look, I'm trying, ok? Stop yelling at me! \n")
    inquirer
        .prompt({
            name: "umm",
            type: "rawlist",
            message: "*Ahem*",
            choices: [
                "Do you two need a minute?",
                "Should I go, or...?",
                "Are you guys gonna sell me stuff, or what?"
            ]
        })
        .then(function () {
            console.log("\n" + "  DAVE: Oh, ah. Sorry about that. \n")
            start();
        });
}

function start() {
    console.log("  FRANK: Here's what we got left: \n")
    var query = "SELECT * FROM products";
    connection.query(query, function (err, res) {
        for (var i = 0; i < res.length; i++) {
            console.log(
                "Item ID: " +
                res[i].item +
                " || Product: " +
                res[i].product +
                " || Department: " +
                res[i].department +
                " || Cost: $" +
                res[i].price +
                " || # Left in Stock: " +
                res[i].stock
            );
        }
        shop();
    })
}

function shop() {
    console.log("\n");
    var query = "SELECT * FROM products";
    connection.query(query, function (err, res) {
        inquirer
            .prompt([
                {
                    name: "pick",
                    type: "input",
                    message: "I'd like the buy the item with this Item #:",
                    validate: function (value) {
                        if (value > res.length) {
                            return false;
                        }
                        if (value < 1) {
                            return false;
                        }
                        if (isNaN(value) === false) {
                            return true;
                        }
                        return false;
                    }
                },
                {
                    name: "select",
                    type: "input",
                    message: "I'd like this amount:",
                    validate: function (pick) {
                        if (pick < 1) {
                            return false;
                        } if (isNaN(pick) === false) {
                            return true;
                        }
                        return false;
                    }
                }
            ])
            .then(function (answer) {
                var correct = answer.pick - 1;
                var cost = answer.select * res[correct].price;
                var get = res[correct].stock;
                if (get - answer.select < 0) {
                    console.log("\n" + "  DAVE: We can't fill that order. We only have " + get + " in stock.");
                    shop();
                }
                else {
                    var restock = res[correct].stock - answer.select;
                    connection2.query("UPDATE products SET stock =" + restock + " WHERE item ='" + answer.pick + "'",
                        function (error, result) {
                            if (error) throw err;
                            console.log("\n" + "  DAVE: That'll be $" + cost + ". Nice doing business with you.");
                            start();
                        }
                    );
                }
            });
    })
}




