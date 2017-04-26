

var doAjax = require('./doAjax');
module.exports = function (type,pn,data,success,msgbox_pointer,timeout) {
    if (msgbox_pointer) msgbox_pointer.setState({show: true, type: "loading", timeout: 0});
    data.pn = pn;
    doAjax({
        type: type ? type : "POST",
        url: "/action",
        dataType: "JSON",
        data: data,
        timeout: timeout ? timeout : 8000,
        crossDomain: true,
        beforeSend: function () {

        },
        success: function (response) {
            if (response) {
                var result = JSON.parse(response);
                success(result);
            }
        },
        error: function (state,type) {
            if (msgbox_pointer)
                if (type == "timeout") {
                     msgbox_pointer.setState({timeout: 1200, type: "text", word: "请求超时"});
                } else {
                     msgbox_pointer.setState({timeout: 1200, type: "text", word: "请求失败"});
                }
        }
    });
};
