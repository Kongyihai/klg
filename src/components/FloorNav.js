/**
 * Created by qian.zhou on 2017/2/23.
 */

var React = require('react');

module.exports = React.createClass({
    getInitialState:function(){
        return {
            floor:'',
            floor_nation:''
        }
    },
    componentDidMount:function(){
        if(this.props.floor){
            this.setState({floor:this.props.floor});
        }
        if(this.props.floor_nation){
            this.setState({floor_nation:this.props.floor_nation});
        }
    },
    render:function(){
        return (
            <div className="floor_title">
                <span className="floor_name">{this.state.floor}</span>
                <span>{this.state.floor_nation}</span>
            </div>
        )
    }

});