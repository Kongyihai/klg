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
            <div className="listItem">
                <div className="icon">
                    <img src="img/icon.jpg" />
                </div>
                <img src="img/1.jpg" alt="" />
                <div className="des">
                    <p>婴儿奶粉 1段适合0-6个月</p>
                    <p>Nutrilon/牛栏</p>
                    <div className="num">
                        <input type="button" className="push"/>
                        <p className="number">1</p>
                        <input type="button" className="reduce"/>
                        <p className="price">
                            ¥<span>89</span>
                        </p>
                    </div>
                </div>
            </div>
        )
    }
});
