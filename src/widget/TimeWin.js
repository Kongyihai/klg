/**
 * Created by caolinlin on 16/12/28.
 */

var React = require('react');
var Win = require('../components/Win');

module.exports = React.createClass({
    getInitialState: function () {
        return {
            dataList:[],
            selectList:[],

            show: false,
            type:"",
            h:0,//选中时
            m:0,//选中分
            s:0//选中秒
        }
    },

    y_H:0, y_H_T:0,
    y_M:0, y_M_T:0,
    y_S:0, y_S_T:0,
    top:0,

    componentDidMount: function () {

        console.log("show : " + this.state.show);
        this.refs.win.setState({show:this.state.show});
    },
    onClick: function () {
        this.props.onClick(this.state.h,this.state.m,this.state.s,this.state.type);
        // console.log(this.state.h+":"+this.state.m+":"+this.state.s);
        this.setState({show:false});

        this.setState({h:0,m:0,s:0});
    },
    touchStart:function(e){
        var id = e.currentTarget.getAttribute("data-id");
        var touch = e.touches[0];
        if(id=="hour"){
            this.y_H = parseInt(touch.pageY);
            this.y_H_T = parseInt(touch.pageY);
        }
        if(id=="minute"){
            this.y_M = parseInt(touch.pageY);
            this.y_M_T = parseInt(touch.pageY);
        }
        if(id=="second"){
            this.y_S = parseInt(touch.pageY);
            this.y_S_T = parseInt(touch.pageY);
        }
    },
    touchMove:function(e){
        e.preventDefault();
        var id = e.currentTarget.getAttribute("data-id");
        var touch = e.touches[0];
        var endY = parseInt(touch.pageY);
        if(id=="hour"){
            var dtYv = Math.abs(this.y_H_T-endY);
            if(dtYv > 15) {
                var dtY = endY - this.y_H;
                var obj = document.getElementsByClassName("r1")[0];
                if (dtY > 30) {
                    obj.scrollTop = obj.scrollTop - 40;
                }
                if (dtY < 30) {
                    obj.scrollTop = obj.scrollTop + 40;
                }
                var sel = Math.floor((obj.scrollTop - this.top) / 40);
                this.setState({h: sel});
                this.y_H_T = endY;
            }
        }
        if(id=="minute"){
            var dtMv = Math.abs(this.y_M_T-endY);
            if(dtMv > 15) {
                var dtY = endY - this.y_M;
                var obj = document.getElementsByClassName("r2")[0];
                if (dtY > 30) {
                    obj.scrollTop = obj.scrollTop - 40;
                }
                if (dtY < 30) {
                    obj.scrollTop = obj.scrollTop + 40;
                }
                var sel = Math.floor((obj.scrollTop - this.top) / 40);
                this.setState({m: sel});
                this.y_M_T = endY;
            }
        }
        if(id=="second"){
            var dtSv = Math.abs(this.y_S_T-endY);
            if(dtSv > 15) {
                var dtY = endY - this.y_S;
                var obj = document.getElementsByClassName("r3")[0];
                if (dtY > 30) {
                    obj.scrollTop = obj.scrollTop - 40;
                }
                if (dtY < 30) {
                    obj.scrollTop = obj.scrollTop + 40;
                }
                var sel = Math.floor((obj.scrollTop - this.top) / 40);
                this.setState({s: sel});
                this.y_S_T = endY;
            }
        }
    },

    doCancel:function(){

    },
    doDone:function(){
        if(this.props.chooseWinDone){

            this.props.chooseWinDone(this.state.h,this.state.m,this.state.s,this.state.type);
            this.setState({h:0,m:0,s:0});
        }

        this.refs.win.setState({show:false});
    },

    render: function () {
        var p = this;
        var dataH  = [];

        for(var i=-1;i<23;i++){
            var obj=(
                <li style={{fontSize:(p.state.h==(i+1))? "2.3rem":"2rem",width:"100px",height:"40px",color:(p.state.h==(i+1))?"black":"gray",fontWeight:(p.state.h==(i+1))?"block":""}} key={"select-li-h"+i}>{(i+1)+"时"}</li>
            );
            dataH.push(obj);
        }
        var dataM  = [];
        for(var i=-1;i<59;i++){
            var obj=(
                <li style={{fontSize:(p.state.m==(i+1))?"2.3rem":"2rem",width:"100px",height:"40px",color:(p.state.m==(i+1))?"black":"gray",fontWeight:(p.state.h==(i+1))?"block":""}} key={"select-li-m"+i}>{(i+1)+"分"}</li>
            );
            dataM.push(obj);
        }

        var dataS  = [];
        for(var i=-1;i<59;i++){
            var obj=(
                <li style={{fontSize:(p.state.s==(i+1))?"2.3rem":"2rem",width:"100px",height:"40px",color:(p.state.s==(i+1))?"black":"gray",fontWeight:(p.state.h==(i+1))?"block":""}} key={"select-li-m"+i}>{(i+1)+"秒"}</li>
            );
            dataS.push(obj);
        }

        return (
            <div >
                <Win ref="win" theme={this.props.theme?this.props.theme:""} title={this.props.title?this.props.title:"标题"}
                     style={this.props.style?this.props.style:{}}
                     doDone={this.doDone}
                     doCancel={this.doCancel}
                     type={this.props.type?this.props.type:""}
                >
                    <div  style={{height:"100%"}}>
                        <div  style={{width:"100%",height:"40px"}}>
                            <div className="fl" style={{width:"33%",height:"4rem",borderBottom:"1px solid #ccc"}}></div>
                            <div className="fl" style={{width:"33%",height:"4rem",borderBottom:"1px solid #ccc"}}></div>
                            <div className="fl" style={{width:"33%",height:"4rem",borderBottom:"1px solid #ccc"}}></div>
                            <div className="cb"></div>
                        </div>
                        <div  style={{width:"100%",height:"40px"}}>
                            <div className="fl" style={{width:"33%",height:"4rem",borderBottom:"1px solid #ccc"}}></div>
                            <div className="fl" style={{width:"33%",height:"4rem",borderBottom:"1px solid #ccc"}}></div>
                            <div className="fl" style={{width:"33%",height:"4rem",borderBottom:"1px solid #ccc"}}></div>
                            <div className="cb"></div>
                        </div>
                        <div  style={{width:"100%",height:"120px",marginTop:"-70px",position:"absolute"}}>
                            <div  className="fl" style={{width:"30%"}}>
                                <ul className="rollBox  r1"  style={{height:"120px",overflow:"hidden",listStyle:"none"}} data-id="hour" onTouchMove={this.touchMove} onTouchStart={this.touchStart} >
                                    <li style={{width:"100px",height:"40px"}}    data-id="-1">&nbsp;</li>
                                    {dataH}
                                    <li style={{width:"100px",height:"40px"}}       data-id="-1">&nbsp;</li>
                                </ul>
                            </div>
                            <div className="fl" style={{width:"30%",marginLeft:"2px"}}>
                                <ul className="rollBox  r2"  style={{height:"120px",overflow:"hidden",listStyle:"none"}} data-id="minute" onTouchMove={this.touchMove} onTouchStart={this.touchStart} >
                                    <li style={{width:"100px",height:"40px"}}  data-id="-1">&nbsp;</li>
                                    {dataM}
                                    <li style={{width:"100px",height:"40px"}}  data-id="-1">&nbsp;</li>
                                </ul>
                            </div>
                            <div className="fl" style={{width:"30%",marginLeft:"2px"}}>
                                <ul className="rollBox  r3"  style={{height:"120px",overflow:"hidden",listStyle:"none"}} data-id="second" onTouchMove={this.touchMove} onTouchStart={this.touchStart} >
                                    <li style={{width:"100px",height:"40px"}} data-id="-1">&nbsp;</li>
                                    {dataS}
                                    <li style={{width:"100px",height:"40px"}} data-id="-1">&nbsp;</li>
                                </ul>

                            </div>
                            <div className="cb" >  </div>
                        </div>
                    </div>
                </Win>

            </div>
        )
    }
});











