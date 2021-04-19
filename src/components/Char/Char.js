import React from 'react';
import Radium from 'radium';

const Char = (props) => {
    const getRandomNumber = () => {
        return Math.floor(Math.random() * 256);
    }

    const R = getRandomNumber();
    const G = getRandomNumber();
    const B = getRandomNumber();

    const style = {
        color: `rgb(${R}, ${G}, ${B})`,
        ':hover': {
            color: 'black',
            cursor: 'pointer'
        }
    }

    return (
        <span style={style}>
            &nbsp;{props.character}
        </span>
    )
}

export default Radium(Char);