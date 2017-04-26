/**
 * Created by caolinlin on 17/1/3.
 */
var React = require('react');

module.exports=React.createClass({
    getInitialState:function(){
        return {
            weeks:[0,0,0,0,0,0,0,0]//0表示全部 1-7表示星期
        }
    },
    componentDidMount:function(){

    },
    weekSelect:function(e){
        e.preventDefault();
        var id = e.currentTarget.getAttribute("data-id");
        var sel = parseInt(id);
        var attr = this.state.weeks;
        if(attr[sel]==0){
            attr[sel] =1;
            if(sel==0){
                attr=[1,0,0,0,0,0,0,0];
            }else{
                attr[0]=0;
            }
        }else{
            attr[sel] =0
        }
        this.setState({weeks:attr});
    },

    render:function(){
        var p=this;
        var wk = ["全","一","二","三","四","五","六","日"];
        var dataWeeks = [];
        for(var i=0;i<8;i++){

            if( p.state.weeks[i]==1 ){
                var tempClass= this.props.theme ? (" l-choosedTime-Week " + this.props.theme+"_Week " ) : " l-choosedTime-Week ";
            }

            var obj = (
                <div key={"wk_"+i} className={(i==0?"fl ":"fl ml5 ")+(p.state.weeks[i]==1? tempClass :" l-repeatTime-Week ")}  onClick={p.weekSelect} data-id={i}>
                    {wk[i]}
                </div>
            );
            dataWeeks.push(obj);
        }
        return(
            <div style={this.props.style?this.props.style:{}}>
                {dataWeeks}
            </div>
        )
    }
});
