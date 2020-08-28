import { combineReducers } from "redux";
import user from "./user_reducer";

const allReducers = combineReducers({
    user,
});

export default allReducers;