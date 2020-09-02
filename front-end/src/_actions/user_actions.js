import axios from './axios';
import {
    LOGIN_USER,
    REGISTER_USER,
    AUTH_USER,
    LOGOUT_USER,
    GET_USERS,
    PROFIL_USER,
} from "./ACTION_TYPES";

import { LOGIN_FACEBOOK_USER, REGISTER_URI, LOGIN_SERVER, USER_PAGE } from "../config";

export async function registerUser({username, password, first_name, last_name, email, avatar, birthday}){

    const formData = new FormData();
    formData.append('username', username);
    formData.append('password', password);
    formData.append('first_name', first_name);
    formData.append('last_name', last_name);
    formData.append('email', email);
    formData.append('birthday', birthday);
    formData.append('avatar', avatar[0]);

    const request = await axios
        .post(`${REGISTER_URI}`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        })
        .then((response) => response.data);

    return {
        type: REGISTER_USER,
        payload: request,
    };
}

export async function LoginUser({username, password}){

    const formData = new FormData();
    formData.append('username', username);
    formData.append('password', password);

    const request = await axios
        .post(`${LOGIN_SERVER}`, {username, password})
        .then((response) => response.data);

    return {
        type: LOGIN_USER,
        payload: true,
        token: request.token,
        facebook: false,
    }
}

export function logoutUser(){
    return {
        type: LOGOUT_USER,
        payload: false,
    };
}

export async function LoginFacebook({token}){
    const request = await axios
        .post(`${LOGIN_FACEBOOK_USER}/${token}`)
        .then((response) => response.data)

    return {
        type: LOGIN_USER,
        payload: true,
        token: request.token,
        facebook: true,
    };
}

export async function showProfil(){
    const request = await axios
        .get(`${USER_PAGE}`)
        .then((response) => response.data)

    return {
        type: PROFIL_USER,
        payload: request,
    };
}
