"use strict";
exports.__esModule = true;
var db_1 = require("../db");
var csv = require('csv-parser');
var fs = require('fs');
var result = [];
fs.createReadStream('Users.csv')
    .pipe(csv({
    separator: ';',
    headers: ["ID", "Name", "Surname", "Mail", "Date", "Phone"]
}))
    .on('data', function (data) {
    result.push(data);
})
    .on('end', function () {
    db_1.database(result);
});
