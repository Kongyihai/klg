/**
 * Created by caolinlin on 17/1/5.
 */
var React = require('react');

module.exports = React.createClass({
    getInitialState: function () {
        return {
            value: 0
        }
    },
    rangeInstance: "",
    componentDidMount() {
        var p=this;
        var target = this.refs.rangeDom;
        var min = this.props.min ? this.props.min : 0;
        var max = this.props.max ? this.props.max : 100;
        var start = this.props.start ? [this.props.start] : [min];
        noUiSlider.create(target, {
            start: 0,
            connect: false,
            step:25,
            range: {
                'min': min,
                'max': max
            },
            pips: {    // Show a scale with the slider
                mode: 'steps',
                density: 25
            }
        });

        //target.noUiSlider.set(this.props.setValue);
        target.noUiSlider.on('update', (v)=>{
            this.props.onchange(parseInt(v));
            p.setState({
                value: parseInt(v)
            });
            //console.log("val : " + this.state.value);
        });
    },
    render: function () {
        return (
            <div className="range-container" >

                <div className={" range-el range-single w85 center " + (this.props.sliderColor)} ref="rangeDom"></div>

                {/*
                <div className=" fl range-data " style={{marginLeft:"2rem"}}>{this.props.min}%</div>
                <div className=" fr range-data " style={{marginRight:"1rem"}}>{this.props.max}%</div>
                 */}

            </div>
        );
    }
});
