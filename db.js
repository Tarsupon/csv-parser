"use strict";
exports.__esModule = true;
var validation_1 = require("./validation");
function database(result) {
    var sqlite3 = require('sqlite3').verbose();
    var db = new sqlite3.Database('sample.db');
    var validArray = validation_1.validate(result);
    db.serialize(function () {
        db.run("CREATE TABLE IF NOT EXISTS user (id INT, name TEXT, surname TEXT, mail Text, date TEXT, phone INT)");
        for (var i = 0; i < validArray.length; i++) {
            var stmt = db.prepare("INSERT INTO user VALUES (?,?,?,?,?,?)");
            var _id = validArray[i].ID;
            var _name = validArray[i].Name;
            var _surname = validArray[i].Surname;
            var _mail = validArray[i].Mail;
            var _date = validArray[i].Date;
            var _phone = validArray[i].Phone;
            stmt.run(_id, _name, _surname, _mail, _date, _phone);
            stmt.finalize();
        }
    });
    db.each("SELECT id, name, surname, mail, date, phone FROM user", function (err, row) {
        console.log("User from db: " + row.id, row.name, row.surname);
    });
    db.close();
}
exports.database = database;
