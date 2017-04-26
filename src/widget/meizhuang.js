/**
 * Created by shc@lierda.com on 2017/2/22.
 */
var React = require('react');
var Meizhuang = require('../components/Meizhuang');

module.exports = React.createClass({
    getInitialState: function (){
        return {
        }
    },
    componentDidMount: function () {

    },
    render: function () {
        return (
            <div className="gj-container">
                <div className="pro-con">
                    <div className="guo_title">
                        <img src="images/hufu1.jpg" />
                    </div>
                    <div className="gj-pro">
                        <Meizhuang url="images/mianmo1.jpg" proName="美迪惠尔潘力面膜" spec="保湿面膜"></Meizhuang>
                        <Meizhuang url="images/mianmo.jpg" proName="卡曼24k黄金面膜" spec=""></Meizhuang>
                        <Meizhuang url="images/mianmo1.jpg" proName="美迪惠尔潘力面膜" spec="保湿面膜"></Meizhuang>
                        <Meizhuang url="images/mianmo.jpg" proName="卡曼24k黄金面膜"></Meizhuang>
                    </div>
                </div>
                <div className="pro-con">
                    <div className="guo_title">
                        <img src="images/hufu2.jpg" />
                    </div>
                    <div className="gj-pro">
                        <Meizhuang url="images/fenbing.jpg" proName="舞蓓可 修容饼" spec="3.5克/个"></Meizhuang>
                        <Meizhuang url="images/kouhong.jpg" proName="口红丝绒魅力唇膏"></Meizhuang>
                        <Meizhuang url="images/fenbing.jpg" proName="舞蓓可 修容饼" spec="3.5克/个"></Meizhuang>
                        <Meizhuang url="images/kouhong.jpg" proName="口红丝绒魅力唇膏"></Meizhuang>
                    </div>
                </div>
            </div>
        )
    }
});
