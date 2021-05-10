const mysql = require("mysql");
const Connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'login'
})
Connection.connect(err => {
    if(err) throw(err);
    else{
        console.log("MySQL connected");
    }
})


module.exports=Connection;