/**
 * Created by Administrator on 2017/4/6 0006.
 */
var React = require('react');


var Bheader = require('../widget/Bheader');
var Footer = require('../widget/Footer');
var Cart = require('../widget/Cart');

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
                <Bheader theme={this.state.theme} title="购物车"></Bheader>
                <div className="container-t">
                    <Cart></Cart>
                </div>
                <Footer ></Footer>
            </div>
        )
    }
});
