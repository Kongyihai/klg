/**
 * Created by Administrator on 2017/4/6 0006.
 */
var React = require('react');

module.exports = React.createClass({
    getInitialState: function () {
        return {

        }
    },

    componentDidMount: function () {

    },

    render: function () {
        var p = this;

        return (
            <div className="header">
                <div className="icon">
                    <img src="img/icon.jpg" />
                </div>
                <h1>新西兰国家馆&gt;</h1>
            </div>
        )
    }
});
