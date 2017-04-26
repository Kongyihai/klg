var React = require('react');


var Header = require('../widget/Header');
var Footer = require('../widget/Footer');
var Category = require('../widget/Category');


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
                <Header theme={this.state.theme}></Header>
                <div className="container-t">
                    <Category></Category>
                </div>
                <Footer witchSelected="fenlei"></Footer>
            </div>
        )
    }
});
