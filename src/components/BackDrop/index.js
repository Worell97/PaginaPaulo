import React from 'react';
import './styles.css';

const BackDrop = props => (
    <div className="backdrop" onClick={props.click}/>
);

export default BackDrop;