import { combineReducers } from "redux";

import authReducer from "./auth";
import currentUserReducer from "./currentUser";
import questionsReducer from "./questions";
import usersReducer from "./users";
import errorReducer from "./error";

export default combineReducers({
    authReducer,usersReducer,currentUserReducer,questionsReducer,errorReducer
})