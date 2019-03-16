import {database} from "../db";

    const csv = require('csv-parser');
    const fs = require('fs');
    var result = [];


        fs.createReadStream('Users.csv')
        .pipe(csv({
            separator: ';',
            headers: ["ID", "Name", "Surname", "Mail", "Date", "Phone"]
        }))
        .on('data', (data) => {
            result.push(data);
        })
        .on('end', ()=>{
            database(result);
        })

    
        



        
  




