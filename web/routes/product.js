/**
 * Created by shc@lierda.com on 2017/1/11.
 */
var DB =  require('../db/db');
/**
 */
exports.productList=function(req,res,msg){
    var id = req.body.id;
    console.log("id="+id);
    var sql="select * from b_product";
    console.log(sql);
    DB.query(sql,function(er,list){
        console.log("----"+JSON.stringify(list));
        if(!er){
            msg.success=true;
            msg.data = list;
            res.json(msg);
        }else{
            msg.msg=er;
            res.json(msg);
        }

    });
};