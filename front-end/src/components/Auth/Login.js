import React from "react";
import { useForm } from "react-hook-form";
import {useDispatch} from "react-redux";
import { useHistory } from "react-router-dom";
import {LoginUser} from "../../_actions/user_actions"
import { FullInput, Button } from  "../componentModels/form"
import {toast} from "react-toastify";

function Login() {
    const dispatch = useDispatch();
    const { handleSubmit, register, errors } = useForm();
    const history = useHistory();

    const onSubmit = values => {
        LoginUser(values)
            .then((data) => {
                dispatch(data)

            })
            .then(() => {
                toast('🦄 You are connected !', {
                    position: "bottom-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                history.push('/me')
            });
    }

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
