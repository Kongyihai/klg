/**
 * Created by caolinlin on 16/12/26.
 *
 * Search:
 *
 *          theme : 自定义主题,使用 theme , 例如: Red , Green , Blue...  注意: 主题的首字母大写
 *          style : 自定义宽度以及位置,系统方法
 *    placeholder : 占位符
 *        onClick : 点击事件
 *       doSearch : 点击搜索时触发的事件,可以
 *
 *    eg: <Search placeholder="搜索..." style={{width:"80%",marginLeft:"10%",marginTop:"100px"}} doSearch={this.doSearch}/>
 */
var React = require('react');

module.exports = React.createClass({
    getInitialState: function () {
        return {
        }
    },

    componentDidMount: function () {

    },

    doSearch:function(){
        if(this.props.doSearch){
            this.props.doSearch(this.refs.input.value);
        }
    },
    onfocus:function(){
        this.setState({showClear:true})
    },
    onblur:function(){

    },
    render: function () {
        return (
            <div className={"l-kuang-Search " +(this.props.theme?this.props.theme+"_Search":"LightBlue_Search")} style={this.props.style?this.props.style:{}}>
                <div className="l-li-Input">
                    <i className={" iconfont icon-" + (this.props.icon?this.props.icon:"zhaoshebei")} />
                </div>
                <input className={"l-inp-Input"} placeholder={this.props.placeholder?this.props.placeholder: "搜索..."} ref="input" onFocus={this.onfocus} onBlur={this.onblur}
                       onClick={this.props.onClick?this.props.onClick:""} />
                <div className={"l-ri-Input"}>
                    <div className={"l-search-Search " +(this.props.theme?this.props.theme+"_bgc":"LightBlue_bgc")} onClick={this.doSearch}>搜索</div>
                </div>
                {this.props.children}
            </div>
        )
    }
});
