/**
 * Created by shc@lierda.com on 2017/2/22.
 */
var React = require('react');
var Icon = require('../components/Icon');
var FloorHead = require('../components/FloorHead');
var FloorNav = require('../components/FloorNav');
var FloorStore = require('../components/FloorStore');


module.exports = React.createClass({
    getInitialState: function (){
        return {

        }
    },
    componentDidMount: function () {

    },

    render: function () {
        return (
            <div className="container">
                <div className="recommend">
                    <FloorHead title="推荐馆"></FloorHead>
                    <div className="store_img fl">
                        <img src="images/store_img.jpg" />
                    </div>
                    <div className="fl store_content">
                        <div className="store_info">
                            <h4>新西兰生活馆</h4>
                            <span className="store_des">集生活。。。。。</span>
                            <div className="store_p">
                                <p className="store_des">F1</p>
                                <div className="store_distance">
                                    <Icon icon="icon-dingwei" className="LightBlue" style={{fontSize:"2rem"}}/>
                                    <span className="store_des">距您1500m</span>
                                </div>
                            </div>
                        </div>
                        <div className="store_act">
                            <p className="store_des">满减活动：满200减20</p>
                            <p className="store_des">进店领券：进店领10元代金券</p>
                        </div>
                    </div>
                </div>
                <div className="floor">
                    <FloorHead title="楼层导览"></FloorHead>
                    <div className="floor_con">
                        <FloorNav floor="1F" floor_nation="新西兰国家馆"></FloorNav>
                        <div className="floor_store">
                            <FloorStore store_name="Euky Bearub"></FloorStore>
                            <FloorStore store_name="Euky Bearub"></FloorStore>
                            <FloorStore store_name="Euky Bearub"></FloorStore>
                            <FloorStore store_name="Euky Bearub"></FloorStore>
                            <FloorStore store_name="Euky Bearub"></FloorStore>
                        </div>
                    </div>
                    <div className="floor_con">
                        <FloorNav floor="2F" floor_nation="澳洲国家馆"></FloorNav>
                        <div className="floor_store">
                            <FloorStore store_name="Euky Bearub"></FloorStore>
                            <FloorStore store_name="Euky Bearub"></FloorStore>
                            <FloorStore store_name="Euky Bearub"></FloorStore>
                            <FloorStore store_name="Euky Bearub"></FloorStore>
                            <FloorStore store_name="Euky Bearub"></FloorStore>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
});
