var React = require('react');


var Bheader = require('../widget/Bheader');
var Footer = require('../widget/Footer');
var Faxian = require('../widget/faxian');


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
                <Bheader theme={this.state.theme} title="发现新宠"></Bheader>
                <div className="container-t">
                    <Faxian></Faxian>
                </div>
                <Footer witchSelected="faxian"></Footer>
            </div>
        )
    }
});
