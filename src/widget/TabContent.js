/**
 * Created by qianzhou on 2017/3/13.
 */
var React = require('react');
var Text = require('../components/Text');
var Icon = require('../components/Icon');

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
            <div className={this.state.theme+"_Text"} style={{paddingTop:"10px",marginBottom:"10px"}}>
                    <div className="wl-d fl" onClick={this.action} action="#near_store">
                        <div className="wl w-con">
                            <div className="fl img-h">
                                <Icon icon="icon-mendian" className="LightBlue" style={{fontSize:"2.5rem"}}/>
                            </div>
                            <Text title="附近门店" name="NABBY  NABBY" style={{display:"block"}}></Text>
                        </div>
                    </div>
                    <div className="wl-d fl" onClick={this.action} action="#renwu">
                        <div className="wl w-con">
                            <div className="fl img-h">
                                <Icon icon="icon-renwu" className="LightBlue" style={{fontSize:"2.5rem"}}/>
                            </div>
                                <Text title="一人一物" name="ONE PETHING" style={{display:"block"}}></Text>
                        </div>
                    </div>
                <div style={{clear:"both"}}></div>
            </div>
        )
    }
});