/**
 * Created by qian.zhou on 2017/2/23.
 */

var React = require('react');

module.exports = React.createClass({
    getInitialState:function(){
        return {
            proName : this.props.proName ? this.props.proName : "",
            spec : this.props.spec ? this.props.spec : "",
            proimg : this.props.proimg ? this.props.proimg : "",
            isnew : this.props.isnew ? this.props.isnew : "",
            mactive : this.props.mactive ? this.props.mactive : "",
            snap_up : this.props.snap_up ? this.props.snap_up : "",
        }
    },
    componentDidMount:function(){
        if(this.props.proName){
            this.setState({proName:this.props.proName});
        }
        if(this.props.spec){
            this.setState({spec:this.props.spec});
        }
        if(this.props.proimg){
            this.setState({proimg:this.props.proimg});
        }
        if(this.props.isnew){
            this.setState({isnew:this.props.isnew});
        }
        if(this.props.mactive){
            this.setState({mactive:this.props.mactive});
        }
        if(this.props.snap_up){
            this.setState({snap_up:this.props.snap_up});
        }
    },
    render:function(){
        return (
            <div className="item">
                <div className="pro_newinfo">
                    <div className="pro-img">
                        <img src={this.props.proimg} />
                    </div>
                    <div className="new">
                        <img src={this.props.isnew}/>
                    </div>
                    <div className="manjian">
                        <span>{this.props.mactive}</span>
                    </div>
                </div>
                <div className="pro-msg">
                    <p className="item_title">卡曼24k黄金面膜</p>
                    <span>850元/瓶</span>
                    <span style={{color:"#000"}}>{this.props.snap_up}</span>
                </div>
                <div className="pro-add">
                    <div className="pro_price">
                        <span>￥89</span>
                    </div>
                    <div className="add_pro_cart">
                        <img src="images/g_addcart.jpg"/>
                    </div>
                </div>
            </div>
        )
    }
});