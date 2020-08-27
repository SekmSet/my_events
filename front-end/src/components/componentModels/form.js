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
