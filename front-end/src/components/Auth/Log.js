import React, {useState} from "react";
import { useForm } from "react-hook-form";
import {useDispatch} from "react-redux";
import { registerUser } from "../../_actions/user_actions"
import { FullInput } from  "../componentModels/form"

function Log() {
    const dispatch = useDispatch();
    const [err, setError] = useState({});
    const { handleSubmit, register, errors } = useForm();

    const onSubmit = values => {
        registerUser(values)
        .then((data) => {
            return dispatch(data);
        }).catch((err) => {
            console.log(JSON.parse(err.request.response).errors);
            setError(JSON.parse(err.request.response).errors);
        }
    )};

    return (
      <div className="container">
          <div className="register">
              <form onSubmit={handleSubmit(onSubmit)}>

                  <FullInput
                      type="text"
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
                      type="text"
                      nameLabel="Last name"
                      nameInput="last_name"
                      ref={register({
                          required: "Required or invalid last name",
                          validate: value => value !== "admin" || "Nice try!"
                      })}
                      errors={errors.last_name && errors.last_name.message}
                  />

                  <FullInput
                      type="text"
                      nameLabel="First name"
                      nameInput="first_name"
                      ref={register({
                          // required: "Required",
                          validate: value => value !== "admin" || "Nice try!"
                      })}
                      errors={errors.first_name && errors.first_name.message}
                  />

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

                  <FullInput
                      type="file"
                      nameLabel="Avatar"
                      nameInput="avatar"
                      ref={register({})}
                      errors={errors.avatar && errors.avatar.message}
                  />

                  <FullInput
                      type="date"
                      nameLabel="Birthday"
                      nameInput="birthday"
                      ref={register({
                          required: "Required",
                      })}
                      errors={errors.birthday && errors.birthday.message}
                  />

                  <button type="submit">Submit</button>
              </form>

              {Object.keys(err).map((e) => (
                  <p key={e}>{e}</p>
              ))}

          </div>

          <div className="login">

          </div>
      </div>
    );
}

export default Log;