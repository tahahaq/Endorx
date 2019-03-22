import {
    EMAIL_CHANGED,
    LOGIN_USER,
    LOGIN_USER_FAILED,
    LOGIN_USER_SUCCESS,
    PASSWORD_CHANGED,
} from "./types";
import {Actions} from 'react-native-router-flux';

export const passwordChanged = (text) => {
    return {
        type: PASSWORD_CHANGED,
        payload: text
    };
};

export const emailChanged = (text) => {
    return {
        type: EMAIL_CHANGED,
        payload: text
    };
};

export const loginUser = ({email, password}) => {

    return (dispatch) => {
        dispatch({type: LOGIN_USER});
    }
};

const loginUserFailed = (dispatch) => {
    dispatch({
        type: LOGIN_USER_FAILED
    })
};

const loginUserSuccess = (dispatch, user) => {
    dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: user
    });
    Actions.employeeList();
};