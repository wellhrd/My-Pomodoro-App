import React from 'react';
import {Button, Text} from 'react-native';

function BreakTime(props) {
    
    return (
        <section>
            <button> Down </button>
            <p> {props.breakTime} </p>
            <button> Up </button>
    
        </section>
    
    
    );
}

export default BreakTime;