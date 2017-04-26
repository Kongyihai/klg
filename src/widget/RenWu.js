/**
 * Created by shc@lierda.com on 2017/2/22.
 */
var React = require('react');
var ProductImg = require('../components/ProductImg');
var ProductProcess = require('../components/ProductProcess');


module.exports = React.createClass({
    getInitialState: function (){
        return {

        }
    },
    componentDidMount: function () {

    },

    render: function () {
        return (
            <div className="container">
                <div className="product_item">
                    <ProductImg title="麦卢卡蜂蜜"></ProductImg>
                    <div className="product-dec">
                        <ProductProcess title="蜂蜜采蜜"></ProductProcess>
                        <ProductProcess title="蜂蜜采蜜"></ProductProcess>
                        <ProductProcess title="蜂蜜采蜜"></ProductProcess>
                    </div>
                    <div className="white-h"></div>
                </div>
                <div className="product_item">
                    <ProductImg title="麦卢卡蜂蜜"></ProductImg>
                    <div className="product-dec">
                        <ProductProcess title="蜂蜜采蜜"></ProductProcess>
                        <ProductProcess title="蜂蜜采蜜"></ProductProcess>
                        <ProductProcess title="蜂蜜采蜜"></ProductProcess>
                    </div>
                    <div className="white-h"></div>
                </div>
            </div>
        )
    }
});
