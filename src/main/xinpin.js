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
                <Bheader theme={this.state.theme} title="新品发布"></Bheader>
                <div className="container-t">

                </div>
                <Footer witchSelected="shouye"></Footer>
            </div>
        )
    }
});
