// import React from 'react';
// import { Button, Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
// //import PropTypes from 'prop-types';
// import Timer from './components/Timer';
// import { FontAwesome } from '@expo/vector-icons';

// const BreakTime = props => {
//     function decreaseCounter() {
//         if (props.breakTime === 1) {
//             return;
//         }
//         props.decreaseBreak();
//     }

//     function increaseCounter() {
//         if (props.breakTime === 30) {
//             return;
//         }
//         props.increaseBreak();
//     }

//     return (
//         <View style={styles.changeInterval}>
//             <FontAwesome.Button style={{ paddingRight: 1 }} name="chevron-circle-down" onPress={decreaseCounter} />
//             <Text style={styles.interval}> {props.breakTime} </Text>
//             <FontAwesome.Button style={{ paddingRight: 1 }} name="chevron-circle-up" onPress={increaseCounter} />
//         </View>
//     );
// }

// const FocusLength = props => {
//     function increaseWork() {
//         if (props.focusLength === 55) {
//             return;
//         }
//         props.increaseWork();
//     }

//     function decreaseWork() {
//         if (props.focusLength === 1) {
//             return;
//         }
//         props.decreaseWork();
//     }

//     return (
//         <View style={styles.changeInterval} >
//             <FontAwesome.Button style={{ paddingRight: 1 }} name="chevron-circle-down" onPress={decreaseWork} />
//             <Text style={styles.interval} > {props.focusLength} </Text>
//             <FontAwesome.Button style={{ paddingRight: 1 }} name="chevron-circle-up" onPress={increaseWork} />
//         </View>
//     );
// }

// class App extends React.Component {
//     constructor() {
//         super();

//         this.state = {
//             breakLength: 5,
//             focusLength: 25,
//             timerMinute: 25
//         };
        
//         this.onIncreaseBreakLength = this.onIncreaseBreakLength.bind(this);
//         this.onDecreaseBreakLength = this.onDecreaseBreakLength.bind(this);
//         this.onIncreaseWorkLength = this.onIncreaseWorkLength.bind(this);
//         this.onDecreaseWorkLength = this.onDecreaseWorkLength.bind(this);
//         this.onToggleInterval = this.onToggleInterval.bind(this);
//         this.onUpdateTimer = this.onUpdateTimer.bind(this);
//         this.onResetTimer = this.onResetTimer.bind(this);
        
//         // Add methods to control timer
//         this.play = this.play.bind(this);
//         this.stop = this.stop.bind(this);
//         this.reset = this.reset.bind(this);
        
//         // Create ref for Timer component
//         this.timerRef = React.createRef();
//     }

//     onIncreaseBreakLength() {
//         this.setState((prevState) => {
//             return {
//                 breakLength: prevState.breakLength + 1
//             };
//         });
//     }

//     onDecreaseBreakLength() {
//         this.setState((prevState) => {
//             return {
//                 breakLength: prevState.breakLength - 1
//             };
//         });
//     }

//     onIncreaseWorkLength() {
//         this.setState((prevState) => {
//             return {
//                 focusLength: prevState.focusLength + 1,
//                 timerMinute: prevState.focusLength + 1
//             };
//         });
//     }

//     onDecreaseWorkLength() {
//         this.setState((prevState) => {
//             return {
//                 focusLength: prevState.focusLength - 1,
//                 timerMinute: prevState.focusLength - 1
//             };
//         });
//     }

//     onUpdateTimer() {
//         this.setState((prevState) => {
//             return {
//                 timerMinute: prevState.timerMinute - 1
//             }
//         })
//     }

//     onToggleInterval(isSession) {
//         if (isSession) {
//             this.setState({
//                 timerMinute: this.state.focusLength
//             })
//         }
//         else {
//             this.setState({
//                 timerMinute: this.state.breakLength
//             })
//         }
//     }

//     onResetTimer() {
//         this.setState({
//             timerMinute: this.state.focusLength
//         })
//     }

//     // Timer control methods that delegate to Timer component
//     play() {
//         if (this.timerRef.current) {
//             this.timerRef.current.play();
//         }
//     }

//     stop() {
//         if (this.timerRef.current) {
//             this.timerRef.current.stop();
//         }
//     }

//     reset() {
//         if (this.timerRef.current) {
//             this.timerRef.current.reset();
//         }
//         this.onResetTimer(); // Also reset the main timer state
//     }

//     render() {
//         return (
//             <View style={styles.container}>
//                 <Image source={require('./assets/stopwatchTimer.png')} style={styles.logo} />

//                 <Text style={{ color: '#888', fontSize: 20, textDecorationLine: 'underline', fontWeight: 'bold', marginBottom: 4, textAlign: 'center' }}>
//                     🍅 POMODORO FOCUS ! </Text>

//                 {/* Break length Section */}
//                 <View style={{ alignItems: 'center', marginTop: 15 }}>
//                     <Text style={styles.timeHeader} > Break Length in Minutes :  </Text>
//                     <BreakTime breakTime={this.state.breakLength} increaseBreak={this.onIncreaseBreakLength} decreaseBreak={this.onDecreaseBreakLength} />
//                 </View>

//                 {/* Work length Section */}
//                 <View style={{ alignItems: 'center', marginTop: 15 }}>
//                     <Text style={styles.timeHeader} > Work Length in Minutes :  </Text>
//                     <FocusLength focusLength={this.state.focusLength} increaseWork={this.onIncreaseWorkLength} decreaseWork={this.onDecreaseWorkLength} />
//                 </View>

//                 <Timer 
//                     ref={this.timerRef}
//                     timerMinute={this.state.timerMinute} 
//                     breakLength={this.state.breakLength} 
//                     updateTimer={this.onUpdateTimer} 
//                     toggleInterval={this.onToggleInterval}
//                     resetTimer={this.onResetTimer} 
//                 />

//                 {/* Controls Section */}
//                 <View style={styles.controls} >
//                     <FontAwesome.Button name="play-circle" style={{ paddingRight: 1, backgroundColor: 'green' }} onPress={this.play} />
//                     <FontAwesome.Button name="stop-circle" style={{ paddingRight: 1, backgroundColor: '#ffc40c' }} onPress={this.stop} />
//                     <FontAwesome.Button name="refresh" style={{ backgroundColor: '#d90429', paddingRight: 1 }} onPress={this.reset} />
//                 </View>
//             </View>
//         );
//     }
// }

// export default App;

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#fff',
//         textAlign: 'center',
//     },
//     logo: {
//         marginTop: 30,
//         width: 250,
//         height: 250,
//         marginBottom: 15,
//         alignSelf: 'center',
//     },
//     button: {
//         width: 40,
//         height: 40,
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     changeInterval: {
//         marginTop: 10,
//         flex: 1,
//         flexDirection: 'row',
//         flexWrap: 'wrap',
//         alignItems: 'center',
//         alignSelf: 'center',
//     },
//     interval: {
//         marginLeft: 10,
//         marginRight: 10,
//         fontSize: 20,
//         fontWeight: 'bold',
//     },
//     timeHeader: {
//         fontSize: 18,
//         fontFamily: 'sans-serif-condensed',
//         color: '#095256',
//         textAlign: 'center',
//         marginTop: 15,
//         flexDirection: 'row',
//     },
//     controls: {
//         flexDirection: 'row',
//         justifyContent: 'space-evenly',
//         marginTop: 30,
//     },
// });


import React from 'react';
import { Button, Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Timer from './components/Timer';
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
            <TouchableOpacity style={styles.iconButton} onPress={decreaseCounter}>
                <FontAwesome name="chevron-circle-down" size={24} color="#007AFF" />
            </TouchableOpacity>
            <Text style={styles.interval}> {props.breakTime} </Text>
            <TouchableOpacity style={styles.iconButton} onPress={increaseCounter}>
                <FontAwesome name="chevron-circle-up" size={24} color="#007AFF" />
            </TouchableOpacity>
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
            <TouchableOpacity style={styles.iconButton} onPress={decreaseWork}>
                <FontAwesome name="chevron-circle-down" size={24} color="#007AFF" />
            </TouchableOpacity>
            <Text style={styles.interval} > {props.focusLength} </Text>
            <TouchableOpacity style={styles.iconButton} onPress={increaseWork}>
                <FontAwesome name="chevron-circle-up" size={24} color="#007AFF" />
            </TouchableOpacity>
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
        
        this.play = this.play.bind(this);
        this.stop = this.stop.bind(this);
        this.reset = this.reset.bind(this);
        
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
        this.onResetTimer();
    }

    render() {
        return (
            <View style={styles.container}>
                <Image source={require('./assets/stopwatchTimer.png')} style={styles.logo} />

                <Text style={styles.title}>
                    🍅 POMODORO FOCUS ! 
                </Text>

                {/* Break length Section */}
                <View style={styles.section}>
                    <Text style={styles.timeHeader}>Break Length in Minutes:</Text>
                    <BreakTime 
                        breakTime={this.state.breakLength} 
                        increaseBreak={this.onIncreaseBreakLength} 
                        decreaseBreak={this.onDecreaseBreakLength} 
                    />
                </View>

                {/* Work length Section */}
                <View style={styles.section}>
                    <Text style={styles.timeHeader}>Work Length in Minutes:</Text>
                    <FocusLength 
                        focusLength={this.state.focusLength} 
                        increaseWork={this.onIncreaseWorkLength} 
                        decreaseWork={this.onDecreaseWorkLength} 
                    />
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
                <View style={styles.controls}>
                    <TouchableOpacity style={[styles.controlButton, styles.playButton]} onPress={this.play}>
                        <FontAwesome name="play-circle" size={40} color="white" />
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.controlButton, styles.stopButton]} onPress={this.stop}>
                        <FontAwesome name="stop-circle" size={40} color="white" />
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.controlButton, styles.resetButton]} onPress={this.reset}>
                        <FontAwesome name="refresh" size={40} color="white" />
                    </TouchableOpacity>
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
        alignItems: 'center',
        paddingTop: 50,
    },
    logo: {
        width: 250,
        height: 250,
        marginBottom: 15,
    },
    title: {
        color: '#888',
        fontSize: 20,
        textDecorationLine: 'underline',
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    section: {
        alignItems: 'center',
        marginTop: 15,
        width: '100%',
    },
    changeInterval: {
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    iconButton: {
        padding: 10,
        minWidth: 44,
        minHeight: 44,
        justifyContent: 'center',
        alignItems: 'center',
    },
    interval: {
        marginLeft: 15,
        marginRight: 15,
        fontSize: 24,
        fontWeight: 'bold',
        minWidth: 40,
        textAlign: 'center',
    },
    timeHeader: {
        fontSize: 18,
        color: '#095256',
        textAlign: 'center',
        marginBottom: 10,
        fontWeight: '600',
    },
    controls: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 30,
        width: '80%',
    },
    controlButton: {
        width: 60,
        height: 60,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    playButton: {
        backgroundColor: 'green',
    },
    stopButton: {
        backgroundColor: '#ffc40c',
    },
    resetButton: {
        backgroundColor: '#d90429',
    },
});