import axios from 'axios';
import {
    LOGIN_USER,
    REGISTER_USER,
    AUTH_USER,
    LOGOUT_USER,
    GET_USERS,
} from "./ACTION_TYPES";

import { SERVER_URI, REGISTER_URI, LOGIN_SERVER } from "../config";

export async function registerUser(values){
    const request = await axios
        .post(`${REGISTER_URI}`, values)
        .then((response) => response.data);
    return {
        type: REGISTER_USER,
        payload: request,
    };
}

