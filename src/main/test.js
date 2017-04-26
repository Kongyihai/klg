/**
 * Created by shc on 16/12/20.
 */
var React = require('react');

var Panel = require('../widget/Panel');
var ChooseWin = require('../widget/ChooseWin');
var Input = require('../components/Input');
var Button = require('../components/Button');
var Section = require('../components/Section');
var Win = require('../components/Win');
var Search = require('../components/Search');
var TimeWin = require('../widget/TimeWin');
var MsgBox = require('../widget/MsgBox');
var Week = require('../components/Week');
var Slider = require('../components/Slider');


module.exports = React.createClass({
    getInitialState: function () {
        return {
            theme:"Red",


            isOpen: false,
            pics:[
                'upload/picture/ae6cc07eb9e1f31b144a28baa61793f0.jpg',
                'upload/picture/873782c768b78f3d6201b214191811a0.jpg',
                'upload/picture/0fcb7ef812ba5b78b7a2bb04fc171909.jpg',
                'upload/picture/ad3e23bc1aa9001eff93a6dd702200e8.jpg',
                'upload/picture/abf6ebcaa9ebe36668f93840e6cfac8b.jpeg',
                'upload/picture/f65df6fc2cf58eb5ad78a0b3543594ea.jpg',
                'upload/picture/bd1c8598364fae2fe295605434a9620c.jpg',
                'upload/picture/865dabcd377e5dca5b5d57d9d2d935ce.jpg',
                'upload/picture/4d8567079408a6a7c202668271301071.jpg',
                'upload/picture/b1eaaa1051e6005c959741f3d0cd4223.jpg',
                'upload/picture/23cb95375b2b39abd19fb2c6c49cbdfb.jpg',
                'upload/picture/b1eaaa1051e6005c959741f3d0cd4223.jpg',
                'upload/picture/23cb95375b2b39abd19fb2c6c49cbdfb.jpg',
                'upload/picture/49c05a1983a22988db2bd1b26e28345d.jpg',
                'upload/picture/7ee8619392b3dbb3d1ac8151034a16df.jpg',
                'upload/picture/72cc481f5f8dd7ba8d3a83be61ece8ce.jpeg',
                'upload/picture/c5ab11b67e3ed12e47ffec8611d47cff.jpg',
                'upload/picture/521614868578ff2987270f24f01459c8.png',
                'upload/picture/bd6bf3c4ef0ac54e73014ccded3b093b.png',
                'upload/picture/635e236a491517450c0f43cefa0a584b.jpg',
                'upload/picture/6bae5fdbfecb1297806fec7621676365.jpg',
                'upload/picture/219c9a0cec9c364d9a4a619b337a394b.jpeg',
                'upload/picture/1f2b4079e7848f5892e602cba38fecf0.png',
                'upload/picture/7acb883953aa511c2fadab39f546c6d2.jpg',
                'upload/picture/a06d28c9b110b5969befafade41f3229.png',
                'upload/picture/e560a988226dbe145775d0b1545ba659.jpg',
                'upload/picture/b6cf2544dbe1cb40dd37c0967d20c7aa.jpg',
                'upload/picture/b87a83d5303ccd4ec06f9acd4e47e09f.jpeg',
                'upload/picture/3ac4dcd689735460b9259db3bd143d69.jpg',
                'upload/picture/f8978e485400fe9991bf96fdf4172eb6.jpg',
                'upload/picture/eadb885475b0ab13650b73a93f6923ab.jpg',
                'upload/picture/4d8567079408a6a7c202668271301071.jpg',
                'upload/picture/88779d9d531e5ea92d5f89f5f6bb850b.jpg',
                'upload/picture/9918319f851444ebe3a31b598750cc91.jpg',
                'upload/picture/087e41e9924b0745e3f24e9866bc8b74.jpg',
                'upload/picture/5986f65e3141ad49a3480187c58ef173.jpg',
                'upload/picture/5248ddd967d6959efed43862d5441866.jpg',
                'upload/picture/ceaf654fff65d441b5424db5264fe8cb.jpg',
                'upload/picture/015b1e6bb0ba7ad8e0747f0c83f0ed71.jpg',
                'upload/picture/8c3ef67c34d6ef3623210b203814a345.jpg',
                'upload/picture/9bfa071741164016a5c2f32cdece7a97.jpg',
                'upload/picture/678c6b57fd3e8d2613452370db2098ea.jpg',
                'upload/picture/9518513f166c6dc79cf3288b3f45f128.jpg',
                'upload/picture/88ec5e401ad317899885cdf5819eb14c.jpg',
                'upload/picture/e51813786c55b2cd0022a7dd8b1dd517.jpg',
                'upload/picture/ed9714137916e3131441b0ee1869f9f2.jpg',
                'upload/picture/d4890b788c209f78da928c8516632a03.jpg',
                'upload/picture/fe3c54c79cc1d164e19b29b15092aa86.jpg'
            ]
        }
    },

    componentDidMount: function () {

    },
    leftClick:function(){
        console.log("leftClick");
    },
    rightClick:function(){
        console.log("rightClick");
    },
    onclick:function(){
        console.log("onclick");
    },
    showWin:function(){
        var list = [
            {icon:"bedroom",name:"未分区",id:"1"},
            {icon:"restaurant",name:"卧室",id:"2"},
            {icon:"restaurant",name:"厨房",id:"3"},
            {icon:"living-room",name:"客厅",id:"4"},
            {icon:"living-room",name:"书房",id:"5"},
            {icon:"bedroom",name:"未分区",id:"6"},
            {icon:"restaurant",name:"卧室",id:"7"},
            {icon:"restaurant",name:"厨房",id:"8"},
            {icon:"living-room",name:"客厅",id:"9"},
            {icon:"living-room",name:"书房",id:"10"},
            {icon:"bedroom",name:"未分区",id:"11"},
            {icon:"restaurant",name:"卧室",id:"12"},
            {icon:"restaurant",name:"厨房",id:"13"},
            {icon:"living-room",name:"书房",id:"14"}
        ];
        this.refs.chooseWin.setState({dataList:list});
        this.refs.chooseWin.refs.win.setState({show:true});
        //this.refs.win.setState({show:true});

        //this.refs.msgbox.setState({show:true,type:3,timeout:1000,modal:true});
    },

    showWin1:function(){
        this.refs.msgbox.setState({show:true,type:3,timeout:1000,modal:true});
    },
    showWin2:function(){
        this.refs.timeWin.refs.win.setState({show:true});
    },


    onCancel:function(){
        console.log("Cancel");
    },
    doSearch:function(v){
        console.log("getText : " + v);
        //console.log("input : " + this.refs.input.refs.input.value);
    },

    chooseWinDone:function(v){
        console.log("chooseWinDone : " + v);
    },

    getTime:function(h,m,s){
        console.log(" h:"+h+" m:"+m+" s:"+ s);
    },
    changeCalendar:function(date){
        console.log("date : " + date);
    },
    handleClick:function () {
        this.setState({ isOpen: true });
    },

    handleCancel:function ()  {

        this.setState({ isOpen: false });
    },

    handleSelect:function (time)  {
        console.log("time : " + time);
        this.setState({ isOpen: false });
    },

    dateTimePicker:function(t){
        console.log("dateTimePicker : "+t);
    },

    sliderChange:function(v){

        console.log("v : " + v);
    },
    openDatePicker:function(){
        this.setState({isOpen:true});
    },

    render: function () {
        var p = this;
        var pics = this.state.pics.map(function(o){
            return(
                <div style={{heigt:"100px",width:"100%",overflow:"hidden"}}>
                    <img src="images/loading.gif" data-echo={"http://www.1jcz.com/"+o} width="200" height="200"/>
                </div>
            )
        });
        return (
            <div className="main" style={{overflow:"scroll"}}>

                {pics}
                <Button theme="Red" style={{width:"100px",marginTop:"50px",marginLeft:"50px"}} >提交</Button>

                <Search style={{width:"80%",marginLeft:"10%",marginTop:"50px"}} doSearch={this.doSearch}/>

                <Input icon="user-name" theme="Blue" style={{width:"80%",marginTop:"50px",marginLeft:"10%"}} onClick={this.openDatePicker}/>

                <Input icon="user-name" theme="Red" style={{width:"80%",marginTop:"50px",marginLeft:"10%"}} onClick={this.showWin}/>
                <ChooseWin theme="Red"  ref="chooseWin" title="ChooseWin" style={{height:"15rem"}} chooseTYP="2" type="2" chooseWinDone={this.chooseWinDone} />


                <Input icon="user-name" style={{width:"80%",marginTop:"50px",marginLeft:"10%"}} onClick={this.showWin1}/>
                <MsgBox ref="msgbox"  cancleTitle="谢谢" doneTitle="好的" />

                <Input icon="user-name" style={{width:"80%",marginTop:"50px",marginLeft:"10%"}} onClick={this.showWin2}/>
                <TimeWin ref="timeWin"  title="timeWin" style={{height:"13rem"}} chooseWinDone={this.getTime}/>


                {/*

                 <Button theme="Red" style={{width:"100px",marginTop:"100px",marginLeft:"50px"}} >提交</Button>

                 <Section title="常用设备" more="更多" theme="Red" onClick={this.onclick}/>

                 <Panel theme="Red" leftPic="cd" rightPic="gengduo"  bottomHide="hide"/>

                 <Button theme="Red" style={{width:"100px"}} >提交</Button>
                 <Button theme="Blue" style={{width:"200px"}}>我要提交</Button>

                 <Search style={{width:"80%",marginLeft:"10%",marginTop:"100px"}} doSearch={this.doSearch}/>
                 <Input ref="input" theme="Blue" icon="user-name" style={{width:"80%",marginTop:"100px",marginLeft:"10%"}} onClick={this.showWin} getText={this.getText}/>

                 <Win ref="win" title="这里是标题" style={{height:"20rem"}} />
                 <Input icon="user-name" style={{width:"80%",marginTop:"100px",marginLeft:"10%"}} onClick={this.showWin}/>

                 <Input icon="user-name" theme="Red" style={{width:"80%",marginTop:"100px",marginLeft:"10%"}} onClick={this.showWin}/>
                 <ChooseWin  ref="chooseWin" title="ChooseWin" style={{height:"15rem"}} chooseTYP="1" type="2" chooseWinDone={this.chooseWinDone} />

                 <Input icon="user-name" style={{width:"80%",marginTop:"100px",marginLeft:"10%"}} onClick={this.showWin}/>
                 <TimeWin ref="timeWin" theme="Red" title="timeWin" style={{height:"13rem"}} chooseWinDone={this.getTime}/>

                 <Input icon="user-name" style={{width:"80%",marginTop:"100px",marginLeft:"10%"}} onClick={this.showWin}/>
                 <MsgBox ref="msgbox" theme="Red" cancleTitle="谢谢" doneTitle="好的" />

                 <Week ref="week" theme="Green" style={{marginTop:"200px"}}/>

                 <DatePicker value={this.state.time} isOpen={this.state.isOpen} onSelect={this.handleSelect} onCancel={this.handleCancel} theme="android"/>

                 <Slider sliderColor={"turnColorOrange"}  min={0} max={100} start={0}  onchange={this.sliderChange} />

                 */}

            </div>
        )
    }
});
