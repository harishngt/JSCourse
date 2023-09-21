const mysql = require("mysql2");
const connection=mysql.createConnection({
    host:"127.0.0.1",
    user:"root",
    password:"root",
    port:"3306", //3306 is the default port on mysql2
    database:"srmws",
});
connection.connect((err)=>{
    if(err){
        console.log("Error connecting to DB");
    } else{
        console.log("Connected to DB");
    }
});
module.exports={connection};