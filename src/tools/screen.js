/**
 * Created by shc@lierda.com on 2016/7/7.
 */
module.exports = {
    setUser:function(username,userid){
        var tokenData = {username: username ,userid : userid};
        document.cookie = "IBMS_DATA="+ escape(JSON.stringify(tokenData));
    },
    getScreenWidth : function(){
        return window.screen.availWidth;
    },
    getScreenHeight : function(){
        return window.screen.availHeight;
    },
    getScreenWidthQuarter : function(){
        return Math.ceil(window.screen.availWidth*0.95/4);
    },
    getScreenWidthThird: function(){
        return Math.ceil(window.screen.availWidth*0.95/3);
    }


}
