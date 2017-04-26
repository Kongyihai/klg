/**
 * Created by shc@lierda.com on 2017/2/22.
 */
var React = require('react');

module.exports = React.createClass({
    getInitialState: function (){
        return {
            theme:"Blue",
            iphone5:false
        }
    },
    is_iphone5: function(){
        if (window.screen.availWidth <= 320){
            return true;
        } else {
            return false;
        }
    },
    componentDidMount: function () {
        this.setState({iphone5:this.is_iphone5()});
        if(this.props.theme){
            this.setState({theme:this.props.theme});
        }
        setTimeout(this.swp,1000);
    },
    swp:function(){
        var swiper = new Swiper('.swiper-container', {
            pagination: '.swiper-pagination',
            effect: 'cube',
            grabCursor: true,
            loop:true,
            autoplay:5000,
            cube: {
                shadow: false,
                slideShadows: false,
                shadowOffset: 20,
                shadowScale: 0.94
            }

        });
    },
    render: function () {
        return (
           < div  className={this.state.theme+"_swiper"}>
                <div className="lunbo" >
                    <div className="bg"  style={{width:"100%",height:"auto",overflow:"hidden"}}>
                        <div className="swiper-container" style={{height:this.state.iphone5?"200px":"280px"}}>
                            <div className="swiper-wrapper">
                                <div className="swiper-slide" style={{backgroundImage:"url(images/swiper/scroll-1.jpg)"}}></div>
                                <div className="swiper-slide" style={{backgroundImage:"url(images/swiper/scroll-1.jpg)"}}></div>
                                <div className="swiper-slide" style={{backgroundImage:"url(images/swiper/scroll-1.jpg)"}}></div>
                                <div className="swiper-slide" style={{backgroundImage:"url(images/swiper/scroll-1.jpg)"}}></div>
                                <div className="swiper-slide" style={{backgroundImage:"url(images/swiper/scroll-1.jpg)"}}></div>
                            </div>

                            <div className="swiper-pagination"></div>
                        </div>
                    </div>
                    <div className="act-msg">

                        <marquee direction="left"  className="left"  scrollamount="0"  >  <div className="bg-dots"></div> 店铺活动 : 3.8号期间预约到门店期间预约到门期间预约到门试穿可享受送衬衫一件</marquee>
                    </div>
                </div>
            </div>
        )
    }
});

