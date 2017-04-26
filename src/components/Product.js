/**
 * Created by qian.zhou on 2017/2/23.
 */

var React = require('react');

module.exports = React.createClass({
    getInitialState:function(){
        return {
            proName:"",
            spec:"",
            proimg:""
        }
    },
    componentDidMount:function(){
        if(this.props.proName){
            this.setState({proName:this.props.proName});
        }
        if(this.props.spec){
            this.setState({spec:this.props.spec});
        }
        if(this.props.proimg){
            this.setState({proimg:this.props.proimg});
        }
    },
    render:function(){
        return (
            <div className="item">
                <div className="pro-img">
                    <img id="pic" src="images/product-2.png"/>
                </div>
                <div className="pro-msg">
                    <p className="item_title">{this.state.proName}</p>
                    <p className="item_price">{this.state.spec}</p>
                </div>
                <div className="pro-add">
                    <div className="pro_price">
                        <span>￥89</span>
                    </div>
                    <div className="add_pro_cart">
                        <img src="images/add_cart.png"/>
                    </div>
                </div>
            </div>
        )
    }
});