"use strict";
exports.__esModule = true;
function database(result) {
    var sqlite3 = require('sqlite3').verbose();
    var db = new sqlite3.Database('sample.db');
    db.serialize(function () {
        db.run("CREATE TABLE IF NOT EXISTS user (id INT, name TEXT, surname TEXT, mail Text, date TEXT, phone INT)");
        for (var i = 0; i < result.length; i++) {
            var stmt = db.prepare("INSERT INTO user VALUES (?,?,?,?,?,?)");
            var _id = result[i].ID;
            var _name = result[i].Name;
            var _surname = result[i].Surname;
            var _mail = result[i].Mail;
            var _date = result[i].Date;
            var _phone = result[i].Phone;
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
