/**
 * Created by caolinlin on 16/12/21.
 *
 * Input:
 *
 *          theme : 自定义主题,使用 theme , 例如: Red , Green , Blue...  注意: 主题的首字母大写
 *          style : 自定义宽度以及位置,系统方法
 *    placeholder : 占位符
 *        onClick : 点击事件
 *        doClear : 点击清除输入框中的内容
 *
 *    eg: <Input icon="user-name" style={{width:"80%",marginTop:"100px",marginLeft:"10%"}} onClick={this.showWin}/>
 *
 */
var React = require('react');

module.exports = React.createClass({
    getInitialState: function () {
        return {
             showClear:false
        }
    },

    componentDidMount: function () {

    },

    doClear:function(){
        this.refs.input.value ="";
    },
    onfocus:function(){
      this.setState({showClear:true})
    },
    onblur:function(){

    },


    render: function () {
        return (
            <div className={"l-item-Input " +(this.props.theme?this.props.theme+"_Input":"Default_Input")} style={this.props.style?this.props.style:{}}>
                <div className="l-li-Input">
                    <i className={"iconfont icon-" + (this.props.icon?this.props.icon:"user-name")} />
                </div>
                <input className={"l-inp-Input"} placeholder={this.props.placeholder?this.props.placeholder:"请输入..."} ref="input" onFocus={this.onfocus} onBlur={this.onblur}
                       onClick={this.props.onClick?this.props.onClick:""} />
                <div className={this.state.showClear?" l-ri-Input ":" hide"}>
                    <i className="iconfont icon-shanchu1" onClick={this.doClear}/>
                </div>
                {this.props.children}
            </div>
        )
    }
});
