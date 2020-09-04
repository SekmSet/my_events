import React from 'react';
import FacebookLogin from 'react-facebook-login';
import { Card } from 'react-bootstrap';
import {useDispatch} from "react-redux";
import { useHistory } from "react-router-dom";

import { LoginFacebook } from '../../_actions/user_actions';

function Facebook() {
    const dispatch = useDispatch();
    const history = useHistory();
 
    const responseFacebook = (response) => {
        if (response.accessToken) {
            LoginFacebook({token: response.accessToken}).then(dataFbk => {
                dispatch(dataFbk)
                history.push('/me');
            });
        }
    }

    return (
        <div className="container">
            <Card style={{ width: '600px' }}>
                <Card.Header>
                    <FacebookLogin
                        appId="1252480801804114"
                        autoLoad={false}
                        fields="name,email,picture"
                        callback={responseFacebook}
                        icon="fa-facebook"
                    />
                </Card.Header>
            </Card>
        </div>
    );
}

export default Facebook;
