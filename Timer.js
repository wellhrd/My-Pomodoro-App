import React from 'react';
import {View, Text} from 'react-native';

class Timer extends React.Component {
    constructor() {
        super();
        
        this.state = {
            isSession: true,
            timerSecond: 0,
            intervalID: 0
        };
        this.play = this.play.bind(this); //Newly added
        this.decreaseTimer = this.decreaseTimer.bind(this);
        //Changes 18/2/2021
        this.stop = this.stop.bind(this);
        this.reset = this.reset.bind(this);
    }
    
play () {
    let intervalID = setInterval(this.decreaseTimer, 1000);
    
    this.setState ({
        intervalID: intervalID
    })
} 
    /*
decreaseTimer () {
    switch (this.state.timerSecond) {
        case 0:
            this.props.updateTimer()
            this.setState ({
                timerSecond: 59
        })
            break;
            default:
                this.setState((prevState) => {
                    return {
                        timerSecond: prevState.timerSecond - 1
                    }
                })
            break;
    }
}        
    */ //Old decrrease timer

decreaseTimer () {
    switch (this.state.timerSecond) {
        case 0:
            if (this.props.timerMinute === 0){
              if (this.state.isSession) {
                this.setState({
                  isSession: false
                });

                this.props.toggleInterval(this.state.isSession);
              } else {
                this.state({
                  isSession: true
                });

                this.props.toggleInterval(this.state.isSession);
              }
            }
            this.props.updateTimer()
            this.setState ({
                timerSecond: 59
        })
            break;
            default:
                this.setState((prevState) => {
                    return {
                        timerSecond: prevState.timerSecond - 1
                    }
                })
            break;
    }
}

stop() {
    clearInterval(this.state.intervalID);
}
    
reset() {
    this.stop();
    this.props.state.resetTimer();          //Work on this reset 
    this.setState ({
        timerSecond: 0, timerMinute: 0
    })
}
    
    render () {
        return (
            <View style={{flexDirection:'row', marginTop: 4, marginBottom: 20, borderWidth: 2, borderRadius: 10, padding: 4, borderColor: '#888', alignSelf: 'center'}}>
            
            <Text style = {{ fontSize: 20, fontWeight: 'bold', color: '#BB9F06' , marginTop: 3}}> {this.state.isSession === true ? "FOCUS" : "Break"} </Text>
            
            <Text style = {{ fontSize: 25, }}> {this.props.timerMinute} </Text>
            <Text style = {{ fontSize: 25, }}> : </Text>
            <Text style = {{ fontSize: 25, }}> {this.state.timerSecond === 0 ? "00" : this.state.timerSecond < 10 ? "0" + this.state.timerSecond : this.state.timerSecond} </Text>
            
                
            </View>
        );
    }
}

export default Timer;

