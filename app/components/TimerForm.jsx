var React = require('react');
var Timer = require('Timer');

var TimerForm = React.createClass({
    onSubmit: function(e) {
        e.preventDefault();
        var sec = this.props.onSetTimer.__reactBoundContext.state.count;
        this.props.onSetTimer(sec);
    },
    render: function () {
        return (
            <div>
                <form ref="form" className="countdown-form" onSubmit={this.onSubmit}>
                    <button className="button expanded">Start</button>
                </form>
            </div>
        );
    }
})

module.exports = TimerForm;
