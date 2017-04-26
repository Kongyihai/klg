/**
 * Created by qian.zhou on 2017/2/23.
 */

var React = require('react');
var Product = require('../components/Product');

module.exports = React.createClass({
    getInitialState:function(){
        return {
        }
    },
    componentDidMount:function(){
    },
    render:function(){
        return (
            <div>
                <div className="pro-con">
                    <div className="guo_title">
                        <img src="images/guo_title.png" />
                    </div>
                    <div className="gj-pro">
                        <Product proName="婴幼儿配方奶粉" spec="850克/罐" proimg="images/product-2.png"></Product>
                        <Product proName="婴幼儿配方奶粉" spec="850克/罐"></Product>
                        <Product proName="婴幼儿配方奶粉" spec="850克/罐"></Product>
                        <Product proName="婴幼儿配方奶粉" spec="850克/罐"></Product>
                    </div>
                </div>
            </div>
        )
    }

});