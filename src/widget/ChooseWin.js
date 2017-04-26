/**
 * Created by caolinlin on 16/12/26.
 *
 * ChooseWin : 可以自定义 高度,主题颜色,标题
 *
 *           show : 默认是false     (this.refs.chooseWin.refs.win.SetState({show:true}))
 *          title : 标题
 *          style : 自定义高度 来定义高度,这个高度是中间部分的高度, 这里注意用 % (百分比没有效果), 要用 rem 或者 px    !!!
 *          theme : 自定义主题 theme , 例如: Red , Green , Blue...  注意: 主题的首字母大写
 *      chooseTYP : 1:单选的 , 不设以及其他是多选 (默认多选)
 *       dataList : 可选的列表
 *   chooseWinDone: 确定键,调用此方法,可以把选择的 selectList 列表返回前一页   (里面是 id列表)
 *           type : 1:只有确定键,不设以及其他是两个都有 (默认两个键都有)
 *
 *      eg: <ChooseWin  ref="chooseWin" title="ChooseWin" style={{height:"15rem"}} chooseTYP="1" type="2" chooseWinDone={this.chooseWinDone} />
 */
var React = require('react');
var Win = require('../components/Win');

module.exports = React.createClass({
    getInitialState: function () {
        return {
            dataList:[],
            selectList:[]
        }
    },

    componentDidMount: function () {

    },

    doCancel:function(){
        this.setState({dataList:[], selectList:[]});
    },
    doDone:function(){
        if(this.props.chooseWinDone){
            this.props.chooseWinDone(this.state.selectList);
        }
    },
    doSelect:function(e){
        var id = e.currentTarget.getAttribute("data-id");
        if(this.props.chooseTYP && this.props.chooseTYP == 1){
            this.setState({selectList:[id]});
        }else{
            var attr =  this.state.selectList;
            var flag=true;
            for(var i=0;i<attr.length;i++){
                if(attr[i]==id){
                    attr.splice(i,1);
                    flag = false;
                }
            }
            if(flag){
                attr.push(id);
            }
            this.setState({selectList:attr});
        }
    },

    onScroll:function(e){
        console.log("onScroll: " +  this.refs.rollBox.scrollTo);

    },

    render: function () {
        var p = this;
        var list = this.state.dataList;
        if(list.length !=0 ){
            var t =1;
            var data = list.map(function(obj){
                var flag = false;
                p.state.selectList.map(function(o){
                    if(obj.id==o){
                        flag=true;
                    }
                });
                return(
                    <div key={"t"+t++} className={"l-block-Win " + (flag? (p.props.theme?p.props.theme +"_bgc White ":" Blue_bgc White "):"")} onClick={p.doSelect} data-id={obj.id}>
                        <div className={"l-block-Win-pic " +(flag ? "" : " DeepGray " )} >
                            <i className={" iconfont "+"icon-"+obj.icon } style={{fontSize:"2.8rem"}}/>
                        </div>
                        <div className="l-block-Win-text">{obj.name}</div>
                    </div>
                )
            })
        }
        return (
            <div >
                <Win ref="win" theme={this.props.theme?this.props.theme:""} title={this.props.title?this.props.title:"标题"}
                     style={this.props.style?this.props.style:{}}
                     doDone={this.doDone}
                     doCancel={this.doCancel}
                     type={this.props.type?this.props.type:""}
                >
                    <div className=" rollBox " style={{height:"100%"}} onScroll={this.onScroll} ref="rollBox">
                        {data}
                    </div>
                </Win>

            </div>
        )
    }
});
