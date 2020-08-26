import React from "react";
import { useForm } from "react-hook-form";
import {useDispatch} from "react-redux";
import { registerUser } from "../../_actions/user_actions"

const FullInput = React.forwardRef(({nameLabel, nameInput, errors}, ref) => (
    <>
        <label>{nameLabel}</label>
        <input
            name={nameInput}
            ref={ref}
        />
        {errors}
    </>
))

function Log() {

    const dispatch = useDispatch();
    const { handleSubmit, register, errors } = useForm();
    const onSubmit = values => {
        registerUser(values)
        .then((data) => dispatch(data))
    };

    return (
      <div>
          <form onSubmit={handleSubmit(onSubmit)}>

              <FullInput
                  nameLabel='Email'
                  nameInput='email'
                  ref={register({
                      required: "Required",
                      pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "invalid email address"
                      }
                    })
                  }
                  errors={errors.email && errors.email.message}
              />

              <FullInput
                  nameLabel="Last name"
                  nameInput="last_name"
                  ref={register({
                      required: "Required or invalid last name",
                      validate: value => value !== "admin" || "Nice try!"
                  })}
                  errors={errors.last_name && errors.last_name.message}
              />

              <FullInput
                nameLabel="First name"
                nameInput="first_name"
                ref={register({
                    required: "Required",
                    validate: value => value !== "admin" || "Nice try!"
                })}
                errors={errors.first_name && errors.first_name.message}
              />

              <FullInput
                nameLabel="Username"
                nameInput="username"
                ref={register({
                    required: "Required",
                    validate: value => value !== "admin" || "Nice try!"
                })}
                errors={errors.username && errors.username.message}
              />

              <FullInput
                  nameLabel="Password"
                  nameInput="password"
                  ref={register({
                      required: "Required",
                      validate: value => value !== "admin" || "Nice try!"
                  })}
                  errors={errors.password && errors.password.message}
              />


              <FullInput
                  nameLabel="Avatar"
                  nameInput="avatar"
                  ref={register({
                      required: "Required",
                      validate: value => value !== "admin" || "Nice try!"
                  })}
                  errors={errors.avatar && errors.avatar.message}
              />

              <FullInput
                  nameLabel="Birthday"
                  nameInput="birthday"
                  ref={register({
                      required: "Required",
                      validate: value => value !== "admin" || "Nice try!"
                  })}
                  errors={errors.birthday && errors.birthday.message}
              />

              <button type="submit">Submit</button>
          </form>
      </div>
    );
}

export default Log;