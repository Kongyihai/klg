/**
 * Created by Administrator on 2017/3/26.
 */
var React = require('react');

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
                <div className="box">
                    <div className="pic">
                        <img src="images/p1.jpg" />
                    </div>
                    <div className="shop_pro">
                        <p className="pname">新西兰 Ellis羊驼毛被</p>
						<span className="p_des">
						400g 柔软舒适保暖 不钻绒
					</span>
                        <p className="p_des">1件</p>
                    </div>
                    <div className="spro_con">
                        <div className="pro_country">
                            <img src="images/guoqi.jpg" />
                        </div>
                        <div className="pro_price">
                            <span>229元</span>
                        </div>
                        <div className="pro_addcart">
                            <img src="images/add_cart.png" />
                        </div>
                    </div>
                </div>
                <div className="box">
                    <div className="pic">
                        <img src="images/p2.jpg" />
                    </div>
                    <div className="shop_pro">
                        <p className="pname">新西兰 Ellis羊驼毛被</p>
						<span className="p_des">
						400g 柔软舒适保暖 不钻绒
					</span>
                        <p className="p_des">1件</p>
                    </div>
                    <div className="spro_con">
                        <div className="pro_country">
                            <img src="images/guoqi.jpg" />
                        </div>
                        <div className="pro_price">
                            <span>229元</span>
                        </div>
                        <div className="pro_addcart">
                            <img src="images/add_cart.png" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }

});