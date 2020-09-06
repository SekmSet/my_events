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

export const FullInputUpdate = React.forwardRef(({type, nameLabel, nameInput, defaultValue, errors}, ref) => (
    <>
        <label htmlFor={nameInput}>{nameLabel}</label>
        <input
            type={type}
            id={nameInput}
            name={nameInput}
            defaultValue={defaultValue}
            ref={ref}
        />
        {errors}
    </>
))

export const FullInputTextarea = React.forwardRef(({nameLabel, nameInput, defaultValue, rows, cols, errors}, ref) => (
    <>
        <label htmlFor={nameInput}>{nameLabel}</label>
        <textarea
            id={nameInput}
            name={nameInput}
            defaultValue={defaultValue}
            rows={rows}
            cols={cols}
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
