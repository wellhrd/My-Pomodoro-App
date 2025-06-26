import React from 'react';
import { Image, StyleSheet, Text, View, Button } from 'react-native';
import PropTypes from 'prop-types';
import Timer from './Timer';
import { FontAwesome } from '@expo/vector-icons';

const BreakTime = props => {
    function decreaseCounter() {
        if (props.breakTime === 1) {
            return;
        }
        props.decreaseBreak();
    }

    function increaseCounter() {
        if (props.breakTime === 30) {
            return;
        }
        props.increaseBreak();
    }

    return (
        <View style={styles.changeInterval}>
            <FontAwesome.Button style={{ paddingRight: 1 }} name="chevron-circle-down" onPress={decreaseCounter} />
            <Text style={styles.interval}> {props.breakTime} </Text>
            <FontAwesome.Button style={{ paddingRight: 1 }} name="chevron-circle-up" onPress={increaseCounter} />
        </View>
    );
}

const FocusLength = props => {
    function increaseWork() {
        if (props.focusLength === 55) {
            return;
        }
        props.increaseWork();
    }

    function decreaseWork() {
        if (props.focusLength === 1) {
            return;
        }
        props.decreaseWork();
    }

    return (
        <View style={styles.changeInterval} >
            <FontAwesome.Button style={{ paddingRight: 1 }} name="chevron-circle-down" onPress={decreaseWork} />
            <Text style={styles.interval} > {props.focusLength} </Text>
            <FontAwesome.Button style={{ paddingRight: 1 }} name="chevron-circle-up" onPress={increaseWork} />
        </View>
    );
}

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            breakLength: 5,
            focusLength: 25,
            timerMinute: 25
        };
        
        this.onIncreaseBreakLength = this.onIncreaseBreakLength.bind(this);
        this.onDecreaseBreakLength = this.onDecreaseBreakLength.bind(this);
        this.onIncreaseWorkLength = this.onIncreaseWorkLength.bind(this);
        this.onDecreaseWorkLength = this.onDecreaseWorkLength.bind(this);
        this.onToggleInterval = this.onToggleInterval.bind(this);
        this.onUpdateTimer = this.onUpdateTimer.bind(this);
        this.onResetTimer = this.onResetTimer.bind(this);
        
        // Add methods to control timer
        this.play = this.play.bind(this);
        this.stop = this.stop.bind(this);
        this.reset = this.reset.bind(this);
        
        // Create ref for Timer component
        this.timerRef = React.createRef();
    }

    onIncreaseBreakLength() {
        this.setState((prevState) => {
            return {
                breakLength: prevState.breakLength + 1
            };
        });
    }

    onDecreaseBreakLength() {
        this.setState((prevState) => {
            return {
                breakLength: prevState.breakLength - 1
            };
        });
    }

    onIncreaseWorkLength() {
        this.setState((prevState) => {
            return {
                focusLength: prevState.focusLength + 1,
                timerMinute: prevState.focusLength + 1
            };
        });
    }

    onDecreaseWorkLength() {
        this.setState((prevState) => {
            return {
                focusLength: prevState.focusLength - 1,
                timerMinute: prevState.focusLength - 1
            };
        });
    }

    onUpdateTimer() {
        this.setState((prevState) => {
            return {
                timerMinute: prevState.timerMinute - 1
            }
        })
    }

    onToggleInterval(isSession) {
        if (isSession) {
            this.setState({
                timerMinute: this.state.focusLength
            })
        }
        else {
            this.setState({
                timerMinute: this.state.breakLength
            })
        }
    }

    onResetTimer() {
        this.setState({
            timerMinute: this.state.focusLength
        })
    }

    // Timer control methods that delegate to Timer component
    play() {
        if (this.timerRef.current) {
            this.timerRef.current.play();
        }
    }

    stop() {
        if (this.timerRef.current) {
            this.timerRef.current.stop();
        }
    }

    reset() {
        if (this.timerRef.current) {
            this.timerRef.current.reset();
        }
        this.onResetTimer(); // Also reset the main timer state
    }

    render() {
        return (
            <View style={styles.container}>
                <Image source={require('./assets/stopwatchTimer.png')} style={styles.logo} />

                <Text style={{ color: '#888', fontSize: 20, textDecorationLine: 'underline', fontWeight: 'bold', marginBottom: 4, textAlign: 'center' }}>
                    🍅 POMODORO FOCUS ! </Text>

                {/* Break length Section */}
                <View style={{ alignItems: 'center', marginTop: 15 }}>
                    <Text style={styles.timeHeader} > Break Length in Minutes :  </Text>
                    <BreakTime breakTime={this.state.breakLength} increaseBreak={this.onIncreaseBreakLength} decreaseBreak={this.onDecreaseBreakLength} />
                </View>

                {/* Work length Section */}
                <View style={{ alignItems: 'center', marginTop: 15 }}>
                    <Text style={styles.timeHeader} > Work Length in Minutes :  </Text>
                    <FocusLength focusLength={this.state.focusLength} increaseWork={this.onIncreaseWorkLength} decreaseWork={this.onDecreaseWorkLength} />
                </View>

                <Timer 
                    ref={this.timerRef}
                    timerMinute={this.state.timerMinute} 
                    breakLength={this.state.breakLength} 
                    updateTimer={this.onUpdateTimer} 
                    toggleInterval={this.onToggleInterval}
                    resetTimer={this.onResetTimer} 
                />

                {/* Controls Section */}
                <View style={styles.controls} >
                    <FontAwesome.Button name="play-circle" style={{ paddingRight: 1, backgroundColor: 'green' }} onPress={this.play} />
                    <FontAwesome.Button name="stop-circle" style={{ paddingRight: 1, backgroundColor: '#ffc40c' }} onPress={this.stop} />
                    <FontAwesome.Button name="refresh" style={{ backgroundColor: '#d90429', paddingRight: 1 }} onPress={this.reset} />
                </View>
            </View>
        );
    }
}

export default App;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        textAlign: 'center',
    },
    logo: {
        marginTop: 30,
        width: 250,
        height: 250,
        marginBottom: 15,
        alignSelf: 'center',
    },
    changeInterval: {
        marginTop: 10,
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        alignSelf: 'center',
    },
    interval: {
        marginLeft: 10,
        marginRight: 10,
        fontSize: 20,
        fontWeight: 'bold',
    },
    timeHeader: {
        fontSize: 18,
        fontFamily: 'sans-serif-condensed',
        color: '#095256',
        textAlign: 'center',
        marginTop: 15,
        flexDirection: 'row',
    },
    controls: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 30,
    },
});