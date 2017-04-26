var React = require('react');


var Bheader = require('../widget/Bheader');
var Footer = require('../widget/Footer');
var Floor = require('../widget/Floor');


module.exports = React.createClass({
    getInitialState: function () {
        return {
            theme:"Default"

        }
    },

    componentDidMount: function () {

    },


    render: function () {
        var p = this;

        return (
            <div className="main"  id="main">
                <Bheader theme={this.state.theme} title="楼层导览"></Bheader>
                <div className="container-t">
                   <Floor></Floor>
                </div>
                <Footer witchSelected="shouye"></Footer>
            </div>
        )
    }
});
