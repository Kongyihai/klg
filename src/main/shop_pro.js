var React = require('react');


var Bheader = require('../widget/Bheader');
var Footer = require('../widget/Footer');
var ShopPro = require('../widget/ShopPro');


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
                <Bheader theme={this.state.theme} title="店铺产品"></Bheader>
                <div className="container-t">
                    <ShopPro></ShopPro>
                </div>
                <Footer witchSelected="shouye"></Footer>
            </div>
        )
    }
});
