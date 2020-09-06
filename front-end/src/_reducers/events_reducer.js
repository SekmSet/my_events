import {
    EVENTS_DISPLAY,
    GET_EVENT
} from "../_actions/ACTION_TYPES";

const initialState = {
    list:{},
    show:{},
}
export default function (state = initialState, action) {
    switch (action.type) {
        case EVENTS_DISPLAY:
            return { ...state, list: action.payload };
        case GET_EVENT:
            return { ...state, show: action.payload };
        default:
            return state;
    }
}
