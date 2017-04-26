/**
 * Created by qian.zhou on 2017/2/23.
 */

var React = require('react');

module.exports = React.createClass({
    getInitialState:function(){
        return {
            title:''

        }
    },
    componentDidMount:function(){
        if(this.props.title){
            this.setState({title:this.props.title});
        }
    },
    render:function(){
        return (
            <div className="product-img">
                <img src="images/fenmi.jpg" />
                <div className="product-name">
                    <span>{this.state.title}</span>
                </div>
            </div>
        )
    }
});