import React from 'react';

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