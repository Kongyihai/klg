/**
 * Created by qian.zhou on 2017/2/23.
 */

var React = require('react');

module.exports = React.createClass({
    getInitialState:function(){
        return {
            store_name:'',
        }
    },
    componentDidMount:function(){
        if(this.props.store_name){
            this.setState({store_name:this.props.store_name});
        }
    },
    render:function(){
        return (
            <div className="item">
                <div className="floor_store_img">
                    <img src="images/store_ad.png" />
                </div>
                <div className="floor_store_title">
                    <span>{this.state.store_name}</span>
                    <p>旗舰店</p>
                </div>
            </div>
        )
    }
});