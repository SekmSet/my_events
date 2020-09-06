import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useForm} from "react-hook-form";
import moment from 'moment';
import {FullInputUpdate, FullInputTextarea, Button, FullInput} from "../componentModels/form"
import {updateUser} from "../../_actions/user_actions";
import {useHistory} from "react-router-dom";

function Update() {
    const dispatch = useDispatch();
    const history = useHistory();
    const infoUser = useSelector((state) => state.user.userInfo);
    const [err, setError] = useState({});
    const { handleSubmit, register, errors } = useForm();

    const onSubmit = values => {
        updateUser(values)
            .then((data) => {
                dispatch(data);
                history.push('/me');
            }).catch((err) => {
                setError(JSON.parse(err.request.response).errors);
            }
        )
    };

    return (
        <div>
            {moment(infoUser?.birthday?.date).format('YYYY-MM-DD')}

            <form onSubmit={handleSubmit(onSubmit)} >
                <FullInputUpdate
                    type="text"
                    nameLabel="username"
                    nameInput="username"
                    defaultValue={infoUser?.username}
                    ref={register({
                        required: "Required",
                        validate: value => value !== "admin" || "Nice try!"
                    })}
                />

                <FullInputUpdate
                    type="text"
                    nameLabel="First name"
                    nameInput="first_name"
                    defaultValue={infoUser?.first_name}
                    ref={register({
                        required: "Required",
                        validate: value => value !== "admin" || "Nice try!"
                    })}
                />

                <FullInputUpdate
                    type="text"
                    nameLabel="Last name"
                    nameInput="last_name"
                    defaultValue={infoUser?.last_name}
                    ref={register({
                        required: "Required",
                        validate: value => value !== "admin" || "Nice try!"
                    })}
                />

                <FullInputUpdate
                    type="text"
                    nameLabel="Email"
                    nameInput="email"
                    defaultValue={infoUser?.email}
                    ref={register({
                        required: "Required",
                        validate: value => value !== "admin" || "Nice try!"
                    })}
                />

                <FullInput
                    type="file"
                    nameLabel="Avatar"
                    nameInput="avatar"
                    ref={register({})}
                    errors={errors.avatar && errors.avatar.message}
                />

                <FullInputUpdate
                    type="date"
                    nameLabel="Birthday"
                    nameInput="birthday"
                    defaultValue={moment(infoUser?.birthday?.date).format('YYYY-MM-DD')}
                    ref={register({
                        required: "Required",
                    })}
                    errors={errors.birthday && errors.birthday.message}
                />

                <FullInputTextarea
                    nameLabel="Resum"
                    nameInput="resum"
                    rows={4}
                    cols={50}
                    defaultValue={infoUser?.resum}
                    ref={register({})}
                    errors={errors.resum && errors.resum.message}
                />

                <Button type="submit" name="Save" />
            </form>
        </div>
    )
}

export default Update;
