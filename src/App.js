import React, { Component } from 'react';
import './App.css';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sec: 0,
      isOn: false
    }
  }



  startTime = () => {
    this.second=setInterval(
      () => {
        this.setState({
          sec: this.state.sec + 1
        })
      },
      1000
    )
    this.setState({
      isOn:true
    })
  }
  stopTime=()=>{
    clearInterval(this.second)
    this.setState({
      isOn:false
    })
  }

  resetTime=()=>{
    clearInterval(this.second)
    this.setState({
      sec:0
    })
  }

  displayTime(timeSec){
    let num=timeSec/3600
    let h=Math.floor(num)
    let m=Math.floor((num-h)*60)
    let s=timeSec-((h*3600)+m*60)
    return<div>
      <span>{String(h).padStart(2,0)} : {String(m).padStart(2,0)} : {String(s).padStart(2,0)}</span>
    </div>
  }


  render() {
    return (<div className="main">
      <p className="time">{this.displayTime(this.state.sec)}</p>
      <div className='time-button'>
        <button onClick={!this.state.isOn ? this.startTime : this.stopTime}>Start</button>
        <button onClick={this.resetTime}>Reset</button>
      </div>
    </div>);
  }
}

export default App;
