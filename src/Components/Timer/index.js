import React, { Component } from 'react';
import './style.css'
export default class Timer extends Component {
    constructor(props){
        super(props);

        this.state = {
            time: this.props.time,
            start: this.props.autostart,
            step: this.props.step,
        };
    };
    startTimer () {
        this.timer = setInterval(()=> {
            if(this.state.time === 0) {
                this.setState({time: this.props.time});
            } else {
               return this.setState({time: this.state.time - 1})
        }
        }, this.props.step);
    };
     componentDidMount() {
        if(this.state.start === true) {
            this.startTimer();
        };
    };

    pauseTimer(timers) {
        clearInterval(timers);
    };

    
    render() {
        return (
        <div className="timer"><h1>Time left: {this.state.time} sec</h1>
        <button className="startBtn" onClick={() => this.startTimer()}>Start</button>
        <button className="pauseBtn" onClick={() => this.pauseTimer(this.timer)}>Pause</button>
        </div>
         ) }
}