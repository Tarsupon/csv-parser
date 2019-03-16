export function validate(result: any[]){
    const regexDate = /^\d{2}([.\/-])\d{2}\1\d{4}$/;
    const validArray = [];
    const fs = require('fs');
    let errorMessage = "";
    for(let i = 0; i< result.length; i++){
        if(result[i].ID >= 1 &&
            result[i].ID <= 9999){
                 if( result[i].Name.length >= 1 &&
                    result[i].Name.length <= 18){
                         if(result[i].Surname.length >= 1 &&
                            result[i].Surname.length <= 18){
                                 if( result[i].Mail.length >= 6 &&
                                    result[i].Mail.length <= 18 ){
                                         if(regexDate.test(result[i].Date)){
                                             if(result[i].Phone.length >= 14 &&
                                                result[i].Phone.length <= 16){
                                                    validArray.push(result[i]);
                                             }
                                             else{
                                                 console.log("Invalid Phone:" + JSON.stringify(result[i]));
                                                 errorMessage += `Invalid Phone:  ${JSON.stringify(result[i])} '\r\n'`;
                                             }
                                         }
                                         else{
                                             console.log("Invalid Date:" + JSON.stringify(result[i]));
                                             errorMessage += `Invalid Date:  ${JSON.stringify(result[i])} '\r\n'`;
                                         }
                                 }
                                 else{
                                     console.log("Invalid Mail:" + JSON.stringify(result[i]));
                                     errorMessage += `Invalid Mail:  ${JSON.stringify(result[i])} '\r\n'`;
                                 }
                         }
                         else{
                             console.log("Invalid Surname:" + JSON.stringify(result[i]));
                             errorMessage += `Invalid Surname:  ${JSON.stringify(result[i])} '\r\n'`;
                         }
                     }
                     else{
                         console.log("Invalid Name:" + JSON.stringify(result[i]));
                         errorMessage += `Invalid Name:  ${JSON.stringify(result[i])} '\r\n'`;
                     }
             }
         else{
             console.log("Invalid ID:" + JSON.stringify(result[i]));
             errorMessage += `Invalid Phone:  ${JSON.stringify(result[i])} '\r\n'`;
         }
    }
    fs.writeFile('errorLogs.txt', ` ${errorMessage}`,  function(err) {
        if (err) {
            return console.error(err);
        }
    });
    return validArray;
}