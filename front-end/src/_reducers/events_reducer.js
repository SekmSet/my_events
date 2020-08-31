import {
    EVENTS_DISPLAY,
    FILTER_EVENTS_BY_NAME
} from "../_actions/ACTION_TYPES";

export default function (state = {}, action) {
    switch (action.type) {
        case EVENTS_DISPLAY:
            return { ...state, list: action.payload };
        case FILTER_EVENTS_BY_NAME:
            return { ...state, filteredList: action.payload};
        default:
            return state;
    }
}
