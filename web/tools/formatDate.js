/**
 * Created by Administrator on 2016/11/7.
 */

exports.format=function(date){
var   year=date.getYear();
var   month=date.getMonth()+1;
var   date=date.getDate();
var   hour=date.getHours();
var   minute=date.getMinutes();
var   second=date.getSeconds();
    return   year+"-"+month+"-"+date+"   "+hour+":"+minute+":"+second;
}