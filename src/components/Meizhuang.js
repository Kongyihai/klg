/**
 * Created by qian.zhou on 2017/2/23.
 */

var React = require('react');

module.exports = React.createClass({
    getInitialState:function(){
        return {
            proName:this.props.proName ? this.props.proName : '',
            spec:this.props.spec ? this.props.spec : '',
            url:this.props.url ? this.props.url : ''
        }
    },
    componentDidMount:function(){
        if(this.props.proName){
            this.setState({proName:this.props.proName});
        }
        if(this.props.spec){
            this.setState({spec:this.props.spec});
        }
        if(this.props.url){
            this.setState({url:this.props.url});
        }
    },
    render:function(){
        return (
            <div className="item" style={{height:"168px"}}>
                <div className="pro-img">
                    <img id="pic" src={this.props.url}/>
                </div>
                <div className="pro-msg">
                    <p className="item_title">{this.props.proName}</p>
                    <p className="item_price" style={{height:"20px"}}>{this.props.spec}</p>
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