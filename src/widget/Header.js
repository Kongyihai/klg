/**
 * Created by shc@lierda.com on 2017/2/22.
 */
var React = require('react');
var Icon = require('../components/Icon');

module.exports = React.createClass({
    getInitialState: function (){
        return {
            theme:"Blue"
        }
    },
    componentDidMount: function () {
       if(this.props.theme){
           this.setState({theme:this.props.theme});
       }
    },

    cart(e){
        var  action=e.currentTarget.getAttribute("action");
        location.href = action;
    },

    render: function () {
        return (
            <div className={this.state.theme+"_Header" + "  " + "head"}>
                <div className="head-l">
                     <Icon icon="icon-wutizhuizong" className="LightBlue" style={{fontSize:"2.2rem"}}/>
                </div>
                <div className="h-cont">
                    <div className="u-head-logo">
                    <span style={{fontSize:"17px",fontWeight:"bold"}}>跨乐购-世界之花</span>
                    </div>
                    <div className="u-hd-location">
                    <span className={this.state.theme+"_Span"}>(哈尔滨)</span>
                    <Icon icon="icon-dingwei" className="LightBlue" style={{fontSize:"2rem"}}/>
                    </div>
                </div>
                <div className="head-f" onClick={this.cart} action="#cart">
                    <span className="span-w">6</span>
                    <Icon icon="icon-gouwuche" className="LightBlue" style={{fontSize:"2.2rem"}}/>
                </div>
            </div>
        )
    }
});
