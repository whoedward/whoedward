var React = require('react');
var TimerForm = require('TimerForm');
var Clock = require('Clock');
var Controls = require('Controls');

var Timer = React.createClass({
    getInitialState: function () {
        return {
            count: 0,
            countdownStatus: 'stopped'
        }
    },
    startTimer: function () {
        this.setState({
            countdownStatus: 'started'
        });

        this.timer = setInterval(() => {
            var newCount = this.state.count + 1;
            this.setState({
                count: newCount
            })
        },1000);
    },
    handleStatusChange: function (newStatus) {
        this.setState({
            countdownStatus: newStatus
        })
    },
    handleSetTimer: function (seconds) {
        this.setState({
            count: seconds,
            countdownStatus: 'started'
        })
    },
    componentDidUpdate: function (prevProps, prevState) {
        if (this.state.countdownStatus != prevState.countdownStatus) {
            switch(this.state.countdownStatus) {
                case 'started':
                    var currentTimer = this.state.count;
                    this.startTimer();
                    break;
                case 'stopped':
                    this.setState({
                        count: 0,
                        countdownStatus: 'stopped'
                    })
                    clearInterval(this.timer);
                    this.timer = undefined;
                    break;
                case 'paused':
                    var currentTimer = this.state.count;
                    this.setState({
                        count: currentTimer,
                        countdownStatus: 'paused'
                    });
                    clearInterval(this.timer);
                    this.timer = undefined;
                    break;
            }
        }
    },
    componentWillUnmount: function () {
        clearInterval(this.timer);
        this.timer = undefined;
    },
    render: function() {
        var {count, countdownStatus} = this.state;
        var renderControlArea = () => {
            if (countdownStatus !== 'stopped') {
                return <Controls countdownStatus={countdownStatus} onStatusChange={this.handleStatusChange}/>;
            } else {
                return <TimerForm onSetTimer={this.handleSetTimer}/>;

            }
        };
        return(
            <div>
                <h1 className="page-title">Timer App</h1>
                <Clock totalSeconds={count}/>
                {renderControlArea()}
            </div>
        );
    }
});

module.exports = Timer;
