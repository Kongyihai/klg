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
            <div className="item">
                <div className="pro-img">
                    <img src="images/process_img.jpg" />
                </div>
                <div className="pro-img-title">
                    <span>{this.state.title}</span>
                </div>
            </div>
        )
    }

});