import React from 'react';
import './Person.css'

const person = ( props )    => {
    return (
        <div className="Person">
            <h1 onClick={props.click}>{props.name}</h1>
            <input type="text" onChange={props.changed} value={props.name} />
            <button>Click me!</button>
        </div>
    )
};

export default person;