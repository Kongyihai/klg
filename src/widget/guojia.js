/**
 * Created by shc@lierda.com on 2017/2/22.
 */
var React = require('react');
var Country = require('../components/Conuntry');

module.exports = React.createClass({
    getInitialState: function (){
        return {
        }
    },
    componentDidMount: function () {

    },
    render: function () {
        return (
            <div className="gj-container">
                <Country></Country>
                <Country></Country>
            </div>
        )
    }
});
