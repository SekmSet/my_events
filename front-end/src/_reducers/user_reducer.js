import {
    LOGIN_USER,
    REGISTER_USER,
    AUTH_USER,
    LOGOUT_USER,
    GET_USERS,
    PROFIL_USER
} from "../_actions/ACTION_TYPES";

const token = window.localStorage.getItem('token');

const initialState = {
    //  loginSucces: token ? true: false,
    loginSucces: !!token,
    token,
}

export default function (state = initialState, action) {
    switch (action.type) {
        case REGISTER_USER:
            return { ...state, register: action.payload };
        case LOGIN_USER:
            window.localStorage.setItem('token', action.token);
            return { ...state, loginSucces: action.payload, token: action.token };
        case AUTH_USER:
            return { ...state, userData: action.payload };
        case LOGOUT_USER:
            window.localStorage.removeItem('token');
            return { ...state, loginSucces: action.payload, token: null };
        case GET_USERS:
            return { ...state, users: action.payload };
        case PROFIL_USER:
            return {...state, userInfo: action.payload}
        default:
            return state;
    }
}