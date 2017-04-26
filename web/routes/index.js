/**
 * Created by shc@lierda.com on 2016/6/27.
 */


exports.action=function(app) {
    app.get('/', index);
    app.post('/action',doAction);
};

function index(req,res){
    res.render("index");
}

function doAction(req,res){
    res.header("Access-Control-Allow-Origin", "*");
    var postName = req.body.pn;
    console.log("postName:"+postName);
    var msg = {success:false,msg:"",data:[],totals:0};
    try{
        eval(postName+"(req,res,msg)");
    }catch(e){
        msg.success=false;
        msg.msg="Service does not exist";
        res.json(msg);
    }
}

var Login = require('./login');
var Product = require('./product');
/**业务action注册*/
//function getPadListByUserid(req,res,msg){ Pad.getPadListByUserid(req,res,msg);}

function productList(req,res,msg){ Product.productList(req,res,msg);}

