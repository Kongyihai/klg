/**
 * Created by shc@lierda.com on 2017/2/22.
 */
var React = require('react');

module.exports = React.createClass({
    getInitialState: function (){
        return {

        }
    },
    componentDidMount: function () {

    },

    render: function () {
        return (
            <div className="pro-info">
                <div className="info-avatar">
                    <img src="images/pro-1.jpg" />
                </div>
                <div  className="add-cart">
                    <span>加入购物车</span>
                </div>
                <div className="info-content">
                    <div className="pro-title">
                        <span>泰国原装进口 东园蜂蜜扁桃仁140g</span>
                    </div>
                    <div className="pro-des">
                        <span className="c-h">限时价</span>
                        <span className="c-r">￥89</span>
                        <span className="del-price">￥168</span>
                    </div>
                    <div className="pro-progress">
                        <div>
                            <span className="settime"></span>
                        </div>
                    </div>
                    <div className="pro-time">
                        剩余时间 02小时 15分 48秒
                    </div>
                </div>
            </div>
        )
    }
});