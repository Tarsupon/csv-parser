import {validate} from "./validation";

export function database(result: any[]): void{
    const sqlite3 = require('sqlite3').verbose();
    const db = new sqlite3.Database('sample.db');
    const validArray = validate(result);

    db.serialize(function() {
        db.run("CREATE TABLE IF NOT EXISTS user (id INT, name TEXT, surname TEXT, mail Text, date TEXT, phone INT)");
        for(let i = 0; i < validArray.length; i++){
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
    db.each("SELECT id, name, surname, mail, date, phone FROM user", function(err, row) {
        console.log("User from db: " +row.id, row.name, row.surname);
    });
    db.close();
}

       