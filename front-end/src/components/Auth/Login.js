import React, {useState} from "react";
import { useForm } from "react-hook-form";
import {useDispatch} from "react-redux";
import { LoginUser } from "../../_actions/user_actions"
import { FullInput, Button } from  "../componentModels/form"

function Login() {
    const dispatch = useDispatch();
    const { handleSubmit, register, errors } = useForm();

    const onSubmit = values => {
        LoginUser(values)
            .then((data) => {
                return dispatch(data);}
        )};

    return (
        <div className="container">
            <div className="register">
                <form onSubmit={handleSubmit(onSubmit)}>

                    <FullInput
                        type="text"
                        nameLabel="Username"
                        nameInput="username"
                        ref={register({
                            required: "Required",
                            validate: value => value !== "admin" || "Nice try!"
                        })}
                        errors={errors.username && errors.username.message}
                    />

                    <FullInput
                        type="password"
                        nameLabel="Password"
                        nameInput="password"
                        ref={register({
                            required: "Required",
                            validate: value => value !== "admin" || "Nice try!"
                        })}
                        errors={errors.password && errors.password.message}
                    />

                    <Button type="submit" name="Login"/>
                </form>
            </div>
        </div>
    );
}

export default Login;