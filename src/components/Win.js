/**
 * Created by caolinlin on 16/12/23.
 *
 * Win : 可以自定义 高度,主题颜色,标题
 *
 *          theme : 自定义主题,使用 theme , 例如: Red , Green , Blue...  注意: 主题的首字母大写
 *          style : 自定义高度 来定义高度,这个高度是中间部分的高度, 这里注意用 % (百分比没有效果), 要用 rem 或者 px   !!!
 *           show : 显示弹框的state,默认false
 *         doShow : 显示弹框的方法
 *         doHide : 隐藏弹框的方法
 *          title : 标题
 *           type : 1:只有确定键, 其他是确定,取消键都有
 *         doDone : 确定
 *       doCancel : 取消
 *
 *      eg:  <Win ref="win" title="这里是标题" style={{height:"20rem"}} type="1" onWinDone={this.onWinDone} onWinCanle={this.onWinCanle}/>
 *
 */

var React = require('react');

module.exports = React.createClass({
    getInitialState: function () {
        return {
           show:false
        }
    },

    componentDidMount: function () {

    },
    doHide:function(){
        this.setState({show:false});
    },
    doShow:function(){
        this.setState({show:true});
    },
    doClick:function(event){
        event.preventDefault();
        event.stopPropagation();
    },
    doCancel:function(){
      this.doHide();
      if(this.props.doCancel){
        this.props.doCancel();
      }

    },
    doDone:function(){
      this.doHide();
      if(this.props.doDone){
          this.props.doDone();
      }
    },

    render: function () {
        return (
            <div className={this.state.show?"l-mask-win ":"hide"} onClick={this.doHide}>
                <div className="l-kuang-Win" onClick={this.doClick} >
                    <div className={"l-title-Win " + (this.props.theme && this.props.theme.length!=0 ?this.props.theme+"_Win":"Default_Win")}>{this.props.title?this.props.title:"这里是标题"}</div>
                    <div className="l-content-Win" style={this.props.style?this.props.style:{}}>
                        {this.props.children}
                    </div>
                    <div className={"l-footer-Win"}>
                    {this.props.type && this.props.type == 1 ?
                        <div className={"l-onedone-Win " + (this.props.theme && this.props.theme.length!=0 ?this.props.theme + "_bgc":"")} onClick={this.doDone}>确定</div>
                        :
                        <div>
                            <div className={"l-cancle-Win " + (this.props.theme && this.props.theme.length!=0 ? this.props.theme + "_bgc":"")} onClick={this.doCancel}>取消</div>
                            <div className={"l-done-Win " + (this.props.theme && this.props.theme.length!=0 ?this.props.theme + "_bgc":"")} onClick={this.doDone}>确定</div>
                        </div>
                    }
                    </div>
                </div>
            </div>
        )
    }
});
