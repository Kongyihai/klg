/**
 * Created by caolinlin on 16/12/28.
 *
 * MsgBox : 可以自定义 高度,主题颜色,标题
 *
 *           show : 默认是false
 *           type : 1:loading ; 2:word 只有一行字; 3: button 有确定,取消按钮的(默认)
 *           word : 你想要展示的字
 *          style : 自定义高度 来定义高度,这个高度是中间部分的高度, 这里注意用 % (百分比没有效果), 要用 rem 或者 px   !!!
 *          theme : 自定义主题,使用 theme , 例如: Red , Green , Blue...  注意: 主题的首字母大写
 *      onMsgDone : 确定
 *     onMsgCanle : 取消
 *          modal : true : 有一个蒙版的效果, false: 没有蒙版的效果(默认)
 *
 *      eg:   <MsgBox theme="Red" ref="msgbox" cancleTitle="取消" doneTitle="确定" onMsgDone={this.onMsgDone} onMsgCanle={this.onMsgCanle}/>
 *          //  this.refs.msgbox.setState({show:true,type:3,modal:true});
 */

var React = require('react');

module.exports = React.createClass({
    getInitialState: function () {
        return {
            show:false,
            type:"3",     // 1:loading ; 2:word 只有一行字; 3: button 有确定,取消按钮的(默认)
            word: "标题",
            timeout: 0,  //  1000 : 1s
            modal:false
        }
    },
    componentDidUpdate: function () {
        if(this.state.type != 1 && this.state.type != 2 && this.state.type != 3 ){
            console.log("type: "+this.state.type);
            this.setState({type:3});     // 默认
        }

        if(this.state.type == "1" || this.state.type == "2"){
            if (this.state.timeout > 0) {
                var p = this;
                setTimeout(function(){
                    p.setState({show: false, timeout: 0});
                },this.state.timeout)
            }
        }
    },
    hide:function(){
        this.setState({show:false});
    },

    doClick:function(event){
        event.preventDefault();
        event.stopPropagation();
    },
    doCanle:function(){
        this.hide();
        if(this.props.onMsgCanle){
            this.props.onMsgCanle();
        }
    },
    doDone:function(){
        this.hide();
        if(this.props.onMsgDone){
            this.props.onMsgDone();
        }
    },

    render: function () {
        var t = this.state.type;
        var modal = this.state.modal ? " l-masktrue-MsgBox ":" l-maskfalse-MsgBox ";
        return (
            <div className={ this.state.show ? modal:" hide " } onClick={this.doClick} disabled="disabled" >
                <div className={ " l-kuang-MsgBox " + (this.props.theme ? this.props.theme +"_MsgBox ": " Default_MsgBox ") + (t==3 ? " mw45 ":"" )} style={this.props.style?this.props.style:{}} >
                    {t == "1" ? <img className="l-img-MsgBox" src="images/loading.gif" /> : ""}
                    {t == "2" ? <div className="l-word-MsgBox">{this.state.word}</div> :""}
                    {t == "3" ?
                        <div>
                            <div className="l-btn-MsgBox"> {this.state.word}</div>
                            <div className="l-cancle-MsgBox" onClick={this.doCanle}>{this.props.cancleTitle?this.props.cancleTitle:"取消"}</div>
                            <div className="l-done-MsgBox" onClick={this.doDone}>{this.props.doneTitle?this.props.doneTitle:"确定"}</div>
                        </div>
                        :""}
                </div>
            </div>
        )
    }
});
