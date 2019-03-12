import {database} from "./db";

    const csv = require('csv-parser');
    const fs = require('fs');
    const regex = /^\d{2}([.\/-])\d{2}\1\d{4}$/;
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

    
        // if(data.ID >= 1 &&
        //     data.ID <= 9999){
        //          if( data.Name.length >= 1 &&
        //              data.Name.length <= 18){
        //                  if(data.Surname.length >= 1 &&
        //                     data.Surname.length <= 18){
        //                          if( data.Mail.length >= 6 &&
        //                              data.Mail.length <= 18){
        //                                  if(this.regex.test(data.Date)){
        //                                      if(data.Phone.length >= 14 &&
        //                                         data.Phone.length <= 16){
        //                                         return data;

        //                                      }
        //                                      else{
        //                                          console.log("Invalid Phone:" + JSON.stringify(data));
        //                                      }
        //                                  }
        //                                  else{
        //                                      console.log("Invalid Date:" + JSON.stringify(data));
        //                                  }
        //                          }
        //                          else{
        //                              console.log("Invalid Mail:" + JSON.stringify(data));
        //                          }
        //                  }
        //                  else{
        //                      console.log("Invalid Surname:" + JSON.stringify(data));
        //                  }
        //              }
        //              else{
        //                  console.log("Invalid Name:" + JSON.stringify(data));
        //              }
        //      }
        //  else{
        //      console.log("Invalid ID:" + JSON.stringify(data));
        //  }


    // public getArray(data): any[]{
    //     var array: any = [];
    //     while(data){
    //         array.push(data);
    //     }
    //     console.log("Array: "+ array);
    //     return array;
    // }


        
  




