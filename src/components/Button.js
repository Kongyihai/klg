/**
 * Created by caolinlin on 16/12/21.
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
            <a
                className={this.props.theme?this.props.theme+"_Button ":" Default_Button "}
                style={this.props.style?this.props.style:{}}
                href ={this.props.href?this.props.href:"#"}
            >
                {this.props.children}
            </a>
        )
    }
});
