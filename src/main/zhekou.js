var React = require('react');


var Bheader = require('../widget/Bheader');
var Footer = require('../widget/Footer');
var Xianshi = require('../widget/Xianshi');


module.exports = React.createClass({
    getInitialState: function () {
        return {
            theme:"Default" //Default/Blue
        }
    },

    componentDidMount: function () {

    },

    render: function () {
        var p = this;

        return (
            <div className="main"  id="main">
                <Bheader theme={this.state.theme} title="限时折扣"></Bheader>
                <div className="container-t">
                    <div className="zhek_container">
                        <div className="zhek_img">
                            <img src="images/zhekou.png" />
                        </div>
                        <Xianshi></Xianshi>
                        <Xianshi></Xianshi>
                        <Xianshi></Xianshi>
                    </div>
                </div>
                <Footer witchSelected="shouye"></Footer>
            </div>
        )
    }
});
