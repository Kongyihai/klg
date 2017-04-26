/**
 * Created by shc@lierda.com on 2016/7/4.
 */
var mysql = require('mysql');
var config = require('../../config');
var pool  = mysql.createPool(
    {
        connectionLimit : 10,
        host:		config.dbURL,
        port:		config.dbPort,
        user:		config.dbUser,
        password:	config.dbPassword,
        database:	config.dbName

    });
function getPool(){
    pool = mysql.createPool({
        connectionLimit : 10,
        host:		config.dbURL,
        port:		config.dbPort,
        user:		config.dbUser,
        password:	config.dbPassword,
        database:	config.dbName

    });
}
exports.query = function (sql, callback){
    pool.getConnection(function (err, connection){
        if(err){
            console.log("this connection:"+err);
            getPool();
        }
        connection.query(sql, function (error,results){
            callback.apply(connection, arguments);
            connection.release();
        });
    })
}.bind(pool);
