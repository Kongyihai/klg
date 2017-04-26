/**
 * Created by shc@lierda.com on 2017/2/22.
 */
var React = require('react');

module.exports = React.createClass({
    getInitialState: function (){
        return {
            flag : false
        }
    },
    componentDidMount: function () {

    },
    change:function(e){
        if(this.state.flag == true){
            this.setState({ flag: false });
            document.getElementsByClassName('tutu')[0].setAttribute('src','images/bottom.png');
        } else {
            this.setState({ flag: true });
            document.getElementsByClassName('tutu')[0].setAttribute('src','images/top.jpg');
        }
    },
    render: function () {
        return (
            <div className="container">
                <div className="find_con">
                    <div className="xin_img">
                        <img src="images/banner_img.png" />
                    </div>
                    <div className="xin_con">
                        <div className="xin_title">
                            <h4>【新村春季游】</h4>
                            <span>油菜花海</span>
                        </div>
                        <div className={this.state.flag == false ? "xin_describe hidden" : "xin_describe visible"}>
                            每年春天，中国最美的回到家奥斯卡的华盛顿好的 大红色的萨达哈刷机大师接电话萨克的大红大数据库的了 发顺丰撒发生的范德萨范德萨范德萨发的说法叫客户的首付款就好好的金凤凰似懂非懂近客户巅峰对决发货都是反倒是健康就是大防寒发的货发的说法的发daffodil发货的富家大室发
                        </div>
                        <div className="more"   onClick={this.change}>
                            <img className="tutu" src="images/bottom.png" />
                        </div>
                    </div>
                </div>
                <div className="find_con">
                    <div className="xin_img">
                        <img src="images/banner_img.png" />
                    </div>
                    <div className="xin_con">
                        <div className="xin_title">
                            <h4>【新村春季游】</h4>
                            <span>油菜花海</span>
                        </div>
                        <div className={this.state.flag == false ? "xin_describe hidden" : "xin_describe visible"}>
                            每年春天，中国最美的回到家奥斯卡的华盛顿好的 大红色的萨达哈刷机大师接电话萨克的大红大数据库的了 发顺丰撒发生的范德萨范德萨范德萨发的说法叫客户的首付款就好好的金凤凰似懂非懂近客户巅峰对决发货都是反倒是健康就是大防寒发的货发的说法的发daffodil发货的富家大室发
                        </div>
                        <div className="more" onClick={this.change}>
                            <img src="images/bottom.png" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
});
