/**
 * Created by shc@lierda.com on 2017/2/22.
 */
var React = require('react');

module.exports = React.createClass({
    getInitialState: function (){
        return {
            theme:"Default",
            icon:"icon-daohang",
            style:{},
            className:""
        }
    },

    componentDidMount: function () {
        if(this.props.icon){
            this.setState({icon:this.props.icon});
        }
        if(this.props.style){
            this.setState({style:this.props.style});
        }
        if(this.props.className){
            this.setState({className:this.props.className});
        }
        if(this.props.theme){
            this.setState({theme:this.props.theme});
        }

    },

    render: function () {
        return (
            <i className={this.state.theme+"_"+this.state.className+" iconfont "+this.state.icon}
               style={this.state.style}>
            </i>
        )
    }
});