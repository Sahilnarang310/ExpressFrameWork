const mysql=require('myswql2');

const pool=mysql.createPool({
    host:'localhost',
    user: 'root',
    database:'node-complete',
    password:NodeComplete
});
module.exports=pool.promise();