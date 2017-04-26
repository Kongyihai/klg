/**
 * Created by qian.zhou on 2017/3/13.
 */

var React = require('react');

module.exports = React.createClass({
    getInitialState: function () {
        return {
            title:"",
            style:{},
            name:""
        }
    },

    componentDidMount: function () {
        if(this.props.title){
            this.setState({title:this.props.title});
        }
        if(this.props.style){
            this.setState({style:this.props.style});
        }
        if(this.props.name){
            this.setState({name:this.props.name});
        }
    },


    render: function () {
        return (
            <div className="w-con-span">
                 <span>{this.state.name}</span>
                 <span style={this.state.style}>{this.state.title}</span>
            </div>
        )
    }
});
