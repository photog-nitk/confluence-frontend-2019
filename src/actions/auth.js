import actionTypes from './actionTypes';
export const login = (uid) => ({
    type: actionTypes.LOGIN,
    uid
});

export const logout = () => ({
    type: actionTypes.LOGOUT
});

//FOR STARTLOGOUT AND STARTLOGIN TO BE ADDED DEPENDING ON AUTH PROVIDER