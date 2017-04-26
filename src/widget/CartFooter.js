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

        return (
            <footer>
                <div className="icon">
                    <img src="img/icon.jpg" />
                    <p className="all">全选</p>
                    <p className="total">
                        合计：
                        <span className="allPrice">89</span>
                        <span>元</span>
                    </p>
                </div>
                <div className="jiesuan">
                    <p>结算(1)</p>
                </div>
            </footer>
        )
    }
});
