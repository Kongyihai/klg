var React = require('react');


var Header = require('../widget/Header');
var Footer = require('../widget/Footer');
var ajax = require('../tools/ajax');


module.exports = React.createClass({
    getInitialState: function () {
        return {
            theme:"Default",
            list:[]
        }
    },

    componentDidMount: function () {
        this.productList();
    },
    productList:function(){
        var p = this;
       /* ajax("POST","productList",{id:100},function(dt){
            console.log(" productList: " + JSON.stringify(dt));
            if(dt && dt.success){
                p.setState({list:dt.data});
            }else{
                console.log("err:"+dt.msg);
            }
        });*/
    },

    render: function () {
        var p = this;

        var  myProductListStr = this.state.list.map(function(obj){
            return(
                <div key={obj.id}>
                    {obj.projectname}
                </div>
            )
        });

        return (
            <div className="main"  id="main">
                <Header theme={this.state.theme}></Header>
                <div className="container-t">

                </div>
                <Footer witchSelected="wode"></Footer>
            </div>
        )
    }
});
