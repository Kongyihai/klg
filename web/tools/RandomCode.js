/**
 * Created by shc@lierda.com on 2016/9/8.
 */
/**
 *随机产生[0-9 a-z]中n个字符
 */
 exports.getCode = function(n){
     var str = "0123456789";
     var s="";
     for(var i = 0; i < n; i++){
         var rand = Math.floor(Math.random() * str.length);
         s += str.charAt(rand);
     }
     return s;
 }