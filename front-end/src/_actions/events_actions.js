import axios from 'axios';
import {
    EVENTS_DISPLAY,
    FILTER_EVENTS_BY_NAME
} from "./ACTION_TYPES";

import { EVENT_SERVER } from "../config";


export async function getEvents() {
    const request = await axios
        .get(`${EVENT_SERVER}`)
        .then((response) => response.data);
    return {
        type: EVENTS_DISPLAY,
        payload: request,
    };
}


export async function filterEvents(name) {
    const request = await axios
        .get(`${EVENT_SERVER}?city_name=${name}`)
        .then((response) => response.data);
    return {
        type: FILTER_EVENTS_BY_NAME,
        payload: request
    };
}
