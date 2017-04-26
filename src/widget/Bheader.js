/**
 * Created by shc@lierda.com on 2017/2/22.
 */
var React = require('react');
var Icon = require('../components/Icon');

module.exports = React.createClass({
    getInitialState: function (){
        return {
            theme:"Blue",
            title:""
        }
    },
    componentDidMount: function () {
        if(this.props.theme){
            this.setState({theme:this.props.theme});
        }
        if(this.props.title){
            this.setState({title:this.props.title});
        }
    },
    action:function(e){
        var action = e.currentTarget.getAttribute("action");
        location.href = action;
    },
    render: function () {
        return (
            <div className={this.state.theme+"_Header" + "  " + "head"}>
                <div className="head-l" onClick={this.action} action="#">
                    <Icon icon="icon-fanhui" className="LightBlue" style={{fontSize:"2rem"}}/>
                </div>
                <div className="h-cont">
                    <div className="u-head-logo">
                        <span style={{fontSize:"18px",fontWeight:"600",letterSpacing:"2px"}}>{this.state.title}</span>
                    </div>
                </div>
                <div className="head-f">
                    <span className="span-w">6</span>
                    <Icon icon="icon-gouwuche" className="LightBlue" style={{fontSize:"2rem"}}/>
                </div>
            </div>
        )
    }
});
