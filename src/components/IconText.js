/**
 * Created by qian.zhou on 2017/2/23.
 */

var React = require('react');

module.exports = React.createClass({
    getInitialState:function(){
        return {
            theme:"Default",
            icon :"icon-iconfabuxinpin",
            style:{},
            title:""
        }
    },
    componentDidMount:function(){
        if(this.props.theme){
            this.setState({theme:this.props.theme});
        }
        if(this.props.icon){
            this.setState({icon:this.props.icon});
        }
        if(this.props.style){
            this.setState({style:this.props.style});
        }
        if(this.props.title){
            this.setState({title:this.props.title});
        }
    },
    render:function(){
        return (
                <div>
                    <div className={" iconfont "+this.state.icon} style={this.props.style}></div>
                    <div className="title-c">{this.state.title}</div>
                </div>
        )
    }

});