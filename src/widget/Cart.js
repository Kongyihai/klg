var React = require('react');

var ListHeader = require('../widget/ListHeader');
var ListItem = require('../widget/ListItem');
var CartFooter = require('../widget/CartFooter');

module.exports = React.createClass({
    getInitialState: function () {
        return {

        }
    },

    componentDidMount: function () {

    },

    render: function () {

        return (
            <div>
                <div className="cartWrap">
                    <ListHeader></ListHeader>
                    <ListItem></ListItem>
                    <ListItem></ListItem>
                    <hr/>
                    <ListHeader></ListHeader>
                    <ListItem></ListItem>
                    <ListItem></ListItem>
                </div>
                <CartFooter></CartFooter>
            </div>
        )
    }
});
