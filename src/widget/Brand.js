/**
 * Created by shc@lierda.com on 2017/2/22.
 */
var React = require('react');
var IconText = require('../components/IconText');

module.exports = React.createClass({
    getInitialState: function (){
        return {
            theme:"Default"
        }
    },
    componentDidMount: function () {
        if(this.props.theme){
            this.setState({theme:this.props.theme});
        }
    },
    action:function(e){
        var action = e.currentTarget.getAttribute("action");
        location.href = action;
    },
    render: function () {
        return (
            <div className="Brand" style={{paddingBottom:"10px"}}>
                <div className={this.state.theme+"_Brand"} onClick={this.action} action="#xinpin">
                    <IconText title="新品发布" size="68px" icon="icon-xinpinicon" style={{fontSize:"3.4rem"}}/>
                </div>
                <div className={this.state.theme+"_Brand"} onClick={this.action} action="#shop_pro">
                    <IconText title="店铺产品" icon="icon-dianpu" style={{fontSize:"3.4rem"}}/>
                </div>
                <div className={this.state.theme+"_Brand"} onClick={this.action} action="#zhekou">
                    <IconText title="名品折扣" icon="icon-xianshizhekou" style={{fontSize:"3.4rem"}}/>
                </div>
                <div className={this.state.theme+"_Brand"}>
                    <IconText title="体验专区" icon="icon-icon"  style={{fontSize:"3.4rem"}}/>
                </div>
                <div className={this.state.theme+"_Brand"}>
                    <IconText title="关于我们" icon="icon-huiyuan"  style={{fontSize:"3.4rem"}}/>
                </div>
                <div className={this.state.theme+"_Brand"}>
                    <IconText title="会员专享" icon="icon-huiyuan1"  style={{fontSize:"3.4rem"}}/>
                </div>
            </div>
        )
    }
});
