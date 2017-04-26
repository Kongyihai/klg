/**
 * Created by qian.zhou on 2017/2/23.
 */

var React = require('react');
var Active = require('../components/Active');

module.exports = React.createClass({
    getInitialState:function(){
        return {
        }
    },
    componentDidMount:function(){
    },
    render:function(){
        return (
            <div className="gj-container">
                <div className="pro-con">
                    <div className="guo_title">
                        <img src="images/new_1.jpg" />
                    </div>
                        <div className="gj-pro">
                            <Active proimg="images/mianmo2.jpg" isnew="images/new_exclusive.png" snap_up="【1元抢购】" mactive="5件减10"></Active>
                            <Active proimg="images/mianmo3.jpg" isnew="images/new_exclusive.png" snap_up="【1元抢购】" mactive="5件减10"></Active>
                            <Active proimg="images/mianmo2.jpg" isnew="images/new_exclusive.png" snap_up="【1元抢购】" mactive="5件减10"></Active>
                            <Active proimg="images/mianmo3.jpg" isnew="images/new_exclusive.png" snap_up="【1元抢购】" mactive="5件减10"></Active>
                        </div>
                </div>
                <div className="pro-con">
                    <div className="guo_title">
                        <img src="images/new_2.jpg" />
                    </div>
                    <div className="gj-pro">
                        <Active proimg="images/mianmo2.jpg" mactive="5件减10"></Active>
                        <Active proimg="images/mianmo3.jpg" mactive="满100减10"></Active>
                        <Active proimg="images/mianmo2.jpg" mactive="5件减10"></Active>
                        <Active proimg="images/mianmo3.jpg" mactive="满100减10"></Active>
                    </div>
                </div>
            </div>
        )
    }

});