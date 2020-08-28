import React from "react";

export const FullInput = React.forwardRef(({type, nameLabel, nameInput, errors}, ref) => (
    <>
        <label htmlFor={nameInput}>{nameLabel}</label>
        <input
            type={type}
            id={nameInput}
            name={nameInput}
            ref={ref}
        />
        {errors}
    </>
))

export const Button = ({type, name, onClick}) => (
    <>
        <button type={type} onClick={onClick}> {name} </button>
    </>
)
