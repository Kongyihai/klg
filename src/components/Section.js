/**
 * Created by caolinlin on 16/12/22.
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
            <div className={this.props.theme ? this.props.theme + "_Section":"Default_Section"} style={this.props.style?this.props.style:{}}>
                <div className="l-title-Section">{this.props.title?this.props.title:"title"}</div>
                <i className="l-pic-Section iconfont icon-ykarrowright" onClick={this.props.onClick?this.props.onClick:""}/>
                <div className="l-more-Section" onClick={this.props.onClick?this.props.onClick:""}>{this.props.more?this.props.more:"more"}</div>
            </div>
        )
    }
});
