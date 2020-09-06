import React from "react";

export const FullInput = React.forwardRef(({type, nameLabel, nameInput, errors}, ref) => (
    <div className="form-group">
        <label htmlFor={nameInput}>{nameLabel}</label>
        <input
            type={type}
            id={nameInput}
            name={nameInput}
            ref={ref}
            className="form-control"
        />
        {errors}
    </div>
))

export const FullInputUpdate = React.forwardRef(({type, nameLabel, nameInput, defaultValue, errors}, ref) => (
    <div className="form-group">
        <label htmlFor={nameInput}>{nameLabel}</label>
        <input
            type={type}
            id={nameInput}
            name={nameInput}
            defaultValue={defaultValue}
            ref={ref}
            className="form-control"
        />
        {errors}
    </div>
))

export const FullInputTextarea = React.forwardRef(({nameLabel, nameInput, defaultValue, rows, cols, errors}, ref) => (
    <div className="form-group">
        <label htmlFor={nameInput}>{nameLabel}</label>
        <textarea
            className="form-control"
            id={nameInput}
            name={nameInput}
            defaultValue={defaultValue}
            rows={rows}
            cols={cols}
            ref={ref}
        />
        {errors}
    </div>
))

export const Button = ({type, name, onClick}) => (
    <>
        <button type={type} onClick={onClick}> {name} </button>
    </>
)
