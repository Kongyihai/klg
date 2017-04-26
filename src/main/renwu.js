var React = require('react');


var Bheader = require('../widget/Bheader');
var Footer = require('../widget/Footer');
var RenWu = require('../widget/RenWu');


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
                <Bheader theme={this.state.theme} title="一人一物"></Bheader>
                <div className="container-t">
                    <RenWu></RenWu>
                </div>
                <Footer witchSelected="shouye"></Footer>
            </div>
        )
    }
});
