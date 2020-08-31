import React, { useState } from 'react';
import FacebookLogin from 'react-facebook-login';
import { Card, Image } from 'react-bootstrap';
import {useDispatch, useSelector} from "react-redux";
import { LoginFacebook } from '../../_actions/user_actions';

function Facebook() {

    const dispatch = useDispatch();
    const user = useSelector((state) => state.user);

    const [login, setLogin] = useState(false);
    const [data, setData] = useState({});

    const responseFacebook = (response) => {
        if (response.accessToken) {
            LoginFacebook({token: response.accessToken}).then(dataFbk => {
                dispatch(dataFbk)
                setData(response)
                setLogin(true);
            });
        } else {
            setLogin(false);
        }
    }

    return (
        <div className="container">
            <Card style={{ width: '600px' }}>
                <Card.Header>
                    { !login &&
                    <FacebookLogin
                        appId="1252480801804114"
                        autoLoad={user.loginSucces}
                        fields="name,email,picture"
                        callback={responseFacebook}
                        icon="fa-facebook" />
                    }
                    { user.loginSucces && data.picture &&
                        <div>
                            <Image src={data.picture.data.url} roundedCircle /> <p> {data.name} </p>
                        </div>

                    }
                </Card.Header>
            </Card>
        </div>
    );
}

export default Facebook;
