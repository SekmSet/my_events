import { combineReducers } from "redux";
import user from "./user_reducer";
import events from "./events_reducer";


const allReducers = combineReducers({
    user,
    events
});

export default allReducers;