/**
 * Created by shc@lierda.com on 2017/2/22.
 */
var React = require('react');
var Guojia = require('../widget/guojia');
var Pingpai = require('../widget/Pingpai');
var Pingpai = require('../widget/Pingpai');
var Meizhuang = require('../widget/meizhuang');
var ProAct = require('../widget/ProAct');

module.exports = React.createClass({
    getInitialState: function (){
        return {
            wxy:"cate1"
        }
    },
    componentDidMount: function () {

    },
    cate: function (e) {
        var cate = e.currentTarget.getAttribute("data");
        this.setState({wxy:cate});

    },

    render: function () {
        return (
            <div className="cate-con">
                <div className="cate-left">
                    <div className={this.state.wxy=="cate1"?"category_d active":"category_d"} onClick={this.cate} data="cate1">
                        <div>国家馆</div>
                    </div>
                    <div className={this.state.wxy=="cate6"?"category_d active":"category_d"} onClick={this.cate} data="cate6">
                        <div>活动</div>
                    </div>
                    <div className={this.state.wxy=="cate3"?"category_d active":"category_d"} onClick={this.cate} data="cate3">
                        <div>美妆护肤</div>
                    </div>
                    <div className={this.state.wxy=="cate2"?"category_d active":"category_d"} onClick={this.cate} data="cate2">
                        <div>品牌馆</div>
                    </div>
                    <div className={this.state.wxy=="cate4"?"category_d active":"category_d"} onClick={this.cate} data="cate4">
                        <div>母婴用品</div>
                    </div>
                    <div className={this.state.wxy=="cate5"?"category_d active":"category_d"} onClick={this.cate} data="cate5">
                        <div>进口食品</div>
                    </div>
                </div>
                <div className="cate-right">
                    {this.state.wxy=="cate1"?<Guojia></Guojia>:""}
                    {this.state.wxy=="cate2"?<Pingpai></Pingpai>:""}
                    {this.state.wxy=="cate3"?<Meizhuang></Meizhuang>:""}
                    {this.state.wxy=="cate4"?<Pingpai></Pingpai>:""}
                    {this.state.wxy=="cate5"?<Guojia></Guojia>:""}
                    {this.state.wxy=="cate6"?<ProAct></ProAct>:""}
                </div>
            </div>
        )
    }
});