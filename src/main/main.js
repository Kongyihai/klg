/**
 * Created by shc on 16/12/20.
 */
var React = require('react');


var Header = require('../widget/Header');
var Brand = require('../widget/Brand');
var TabContent = require('../widget/TabContent');
var Footer = require('../widget/Footer');
var Swiper = require('../widget/Swiper');


module.exports = React.createClass({
    getInitialState: function () {
        return {
            theme:"Default" //Default/Blue

        }
    },
    temp:-1,
    scroll:function(){
        console.log("onscroll");
        var imgElements = document.getElementsByTagName("img");
        var lazyImgArr = new Array();
        var aa = [];
        var j = 0;
        for(var i=0; i<imgElements.length; i++) {
            if(imgElements[i].className  == "lazy"){
                lazyImgArr[j++] = imgElements[i];
                aa.push(imgElements[i].alt);
            }
        }
        console.log(JSON.stringify(aa));
        var scrollHeight = main.scrollTop;//滚动的高度
        var bodyHeight = main.offsetHeight;//body（页面）可见区域的总高度
        if(this.temp < scrollHeight) {//为true表示是向下滚动，否则是向上滚动，不需要执行动作。
            for(var k=0; k<lazyImgArr.length; k++) {
                var imgTop = lazyImgArr[k].offsetTop;//1305（图片纵坐标）
                if((imgTop - scrollHeight) <= bodyHeight) {
                    lazyImgArr[k].src = lazyImgArr[k].alt;
                    lazyImgArr[k].className = ""
                }
            }
            this.temp = scrollHeight;
        }
    },

    componentDidMount: function () {
        console.log($)
        this.scroll();
    },

    render: function () {
        var p = this;
        return (
            <div className="main" id="main">
                <Header theme={this.state.theme}></Header>
                <div className="container-t">
                    <TabContent theme={this.state.theme}></TabContent>
                    <Swiper theme={this.state.theme}></Swiper>
                    <Brand theme={this.state.theme}></Brand>
                </div>
                <Footer witchSelected="shouye"></Footer>
            </div>
        )
    }
});
