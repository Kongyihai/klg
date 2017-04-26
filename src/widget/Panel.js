/**
 * Created by caolinlin on 16/12/20.
 *
 * Panel :  可以自定义高度,宽度,以及位置(style),
 *
 *           theme  : 自定义主题 , 例如: Red , Green , Blue...  注意: 主题的首字母大写
 *            style : 自定义宽度以及位置,系统方法
 *          leftPic : 左边图标  icon-leftPic , 默认是隐藏图标的以及点击事件的,若需要直接写此属性即可
 *        leftClick : 点击左边图标触发的事件
 *         rightPic : 右边图标  icon-rightPic , 默认是隐藏图标的以及点击事件的
 *       rightClick : 点击右边图标触发的事件
 *       bottomHide : hide:隐藏底部,默认是不隐藏
 *
 *       eg:  <Panel theme="Red" leftPic="cd" leftClick={this.leftClick} rightClick={this.rightClick} rightPic="gengduo"  bottomHide="hide"/>
 */
var React = require('react');

module.exports = React.createClass({
    getInitialState: function () {
        return {

        }
    },

    componentDidMount: function () {

    },

    render: function () {
        return (
            <div className={"main"} style={this.props.style?this.props.style:{}}>
                <header>
                    <div className={"l-topbar-Panel " + (this.props.theme ? this.props.theme + "_Panel":"Default_Panel") }>
                        <div className={"l-leftMenu-Panel " + (this.props.leftPic? "":" hide")}>
                            <i className={"iconfont icon-" +(this.props.leftPic?this.props.leftPic:"cd")} onClick={this.props.leftClick?this.props.leftClick:""}/>
                        </div>
                        <div className="l-title-Panel fs13" style={{marginLeft:this.props.leftPic?"15%":"25%"}}>{this.props.toptitle?this.props.toptitle:"header"}</div>
                       <div className={"l-rightMenu-Panel " + (this.props.rightPic? "":" hide")}>
                           <i className={"iconfont icon-" +(this.props.rightPic?this.props.rightPic:"gengduo")} onClick={this.props.rightClick?this.props.rightClick:""}/>
                       </div>
                    </div>
                </header>
                <footer className={this.props.bottomHide == "hide"? "hide":"block"}>
                    <div className={"l-bottombar-Panel " + (this.props.theme ? this.props.theme + "_Panel":"Default_Panel") }>
                        <div className="l-title-Panel fs13" style={{marginLeft:"25%"}}>{this.props.bottomtitle?this.props.bottomtitle:"footer"}</div>
                    </div>
                </footer>
                {this.props.children}
            </div>
        )
    }
});
