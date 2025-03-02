import React from 'react';
import "./button.css";

const Button = ({label}) => {
    return (
        //You should not use the id as some developer might change
        <button data-testid="button">
        {label}
        </button>
    );
};

export default Button;