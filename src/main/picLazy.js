/**
 * Created by shc@lierda.com on 2017/2/23.
 */
var React = require('react');


var Header = require('../widget/Header');


/**图片延迟加载测试*/
module.exports = React.createClass({
    getInitialState: function () {
        return {
            theme:"Default", //Default/Blue
            pics:[
                {title:"aa",id:1,name:"护手霜",imgpic:"/images/aa.png"},
                {title:"aa",id:2,name:"护手霜",imgpic:"/images/aa.png"},
                {title:"aa",id:3,name:"护手霜",imgpic:"/images/aa.png"},
                {title:"aa",id:4,name:"护手霜",imgpic:"/images/aa.png"},
                {title:"aa",id:5,name:"护手霜",imgpic:"/images/aa.png"},
                {title:"aa",id:6,name:"护手霜",imgpic:"/images/aa.png"},
                {title:"aa",id:7,name:"护手霜",imgpic:"/images/aa.png"},
                {title:"aa",id:8,name:"护手霜",imgpic:"/images/aa.png"},
                {title:"aa",id:9,name:"护手霜",imgpic:"/images/aa.png"}
            ]
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
        var scrollHeight = main.scrollTop;
        var bodyHeight = main.offsetHeight;
        if(this.temp < scrollHeight) {
            for(var k=0; k<lazyImgArr.length; k++) {
                var imgTop = lazyImgArr[k].offsetTop;
                if((imgTop - scrollHeight) <= bodyHeight) {
                    lazyImgArr[k].src = lazyImgArr[k].alt;
                    lazyImgArr[k].className = ""
                }
            }
            this.temp = scrollHeight;
        }
    },

    componentDidMount: function () {
        this.scroll();
        setTimeout(this.change,2000);
    },
    change:function(){
        var ss=[
            {title:"aa",id:11,name:"ewrew",imgpic:"/images/aa.png"},
            {title:"aa",id:12,name:"rvfffff",imgpic:"/images/aa.png"}
        ];
        this.setState({pics:[]});
        this.setState({pics:ss});
    },

    render: function () {
        var p = this;
        var k = 0;
        var pics = this.state.pics.map(function(o){
            return(
                <div key={o.id} style={{marginTop:"48px"}}>
                  <div>{o.name}</div>
                    <img src={o.imgpic}/>
                </div>
            )
        });
        return (
            <div className="main" style={{overflow:"scroll"}} onScroll={this.scroll} id="main">
                <Header theme={this.state.theme}></Header>
                <a href="#test">fdsfds</a>
                {pics}
            </div>
        )
    }
});