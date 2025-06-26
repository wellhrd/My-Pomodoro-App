import React from 'react';
import { View, Text, Vibration } from 'react-native';

class Timer extends React.Component {
    constructor() {
        super();
        this.state = {
            isSession: true,
            timerSecond: 0,
            intervalID: 0
        };
        this.play = this.play.bind(this);
        this.decreaseTimer = this.decreaseTimer.bind(this);
        this.stop = this.stop.bind(this);
        this.reset = this.reset.bind(this);
    }

    play() {
        // Clear any existing interval first
        if (this.state.intervalID) {
            clearInterval(this.state.intervalID);
        }

        let intervalID = setInterval(this.decreaseTimer, 1000);
        this.setState({
            intervalID: intervalID
        });
    }

    decreaseTimer() {
        switch (this.state.timerSecond) {
            case 0:
                if (this.props.timerMinute === 0) {

                    // Timer finished, vibrate and switch between session and break
                    Vibration.vibrate([500, 500, 500]); // Vibrate when switching

                    // Timer finished, switch between session and break
                    if (this.state.isSession) {
                        // Switching to break - longer, relaxed vibration
                        Vibration.vibrate([800, 200, 200]);

                        this.setState({
                            isSession: false
                        });
                        this.props.toggleInterval(false); // Pass the new state
                    } else {
                        // Switching to focus - short, energetic vibration
                        Vibration.vibrate([200, 100, 200, 100, 200]);
                        this.setState({
                            isSession: true
                        });
                        this.props.toggleInterval(true); // Pass the new state
                    }
                } else {
                    // Decrement minute and reset seconds
                    this.props.updateTimer();
                }
                this.setState({
                    timerSecond: 59
                });
                break;
            default:
                this.setState((prevState) => {
                    return {
                        timerSecond: prevState.timerSecond - 1
                    }
                });
                break;
        }
    }

    stop() {
        clearInterval(this.state.intervalID);
        this.setState({
            intervalID: 0
        });
    }

    reset() {
        this.stop();
        if (this.props.resetTimer) {
            this.props.resetTimer();
        }
        this.setState({
            timerSecond: 0,
            isSession: true
        });
    }

    render() {
        return (
            <View style={{
                flexDirection: 'row',
                marginTop: 40,
                marginBottom: 10,
                borderWidth: 2,
                borderRadius: 10,
                padding: 4,
                borderColor: '#888',
                alignSelf: 'center'
            }}>
                <Text style={{
                    fontSize: 20,
                    fontWeight: 'bold',
                    color: '#BB9F06',
                    marginTop: 3,
                    marginRight: 10
                }}>
                    {this.state.isSession === true ? "FOCUS" : "BREAK"}
                </Text>
                <Text style={{ fontSize: 25 }}>
                    {this.props.timerMinute < 10 ? "0" + this.props.timerMinute : this.props.timerMinute}
                </Text>
                <Text style={{ fontSize: 25 }}> : </Text>
                <Text style={{ fontSize: 25 }}>
                    {this.state.timerSecond === 0 ? "00" : this.state.timerSecond < 10 ? "0" + this.state.timerSecond : this.state.timerSecond}
                </Text>
            </View>
        );
    }
}

export default Timer;
