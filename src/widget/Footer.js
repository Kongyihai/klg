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
    action:function(e){
        var action = e.currentTarget.getAttribute("action");
        location.href = action;
    },
    render: function () {
        return (
            <div className="footer">
                <div className={this.props.witchSelected=="shouye"?"ft-d ft-active":"ft-d"} onClick={this.action} action="#">
                    <Icon icon="icon-shouye" className="LightBlue" style={{fontSize:"2.2rem"}}/>
                    <div>首页</div>
                </div>
                <div className={this.props.witchSelected=="fenlei"?"ft-d ft-active":"ft-d"} onClick={this.action} action="#fenlei">
                    <Icon icon="icon-fenlei" className="LightBlue" style={{fontSize:"2.2rem"}}/>
                    <div>分类</div>
                </div>
                <div className={this.props.witchSelected=="faxian"?"ft-d ft-active":"ft-d"} onClick={this.action} action="#faxian">
                    <Icon icon="icon-faxian" className="LightBlue" style={{fontSize:"2.2rem"}}/>
                    <div>发现</div>
                </div>
                <div className={this.props.witchSelected=="wode"?"ft-d ft-active":"ft-d"} onClick={this.action} action="#wode">
                    <Icon icon="icon-wo" className="LightBlue" style={{fontSize:"2.2rem"}}/>
                    <div>我的</div>
                </div>
            </div>
        )
    }
});