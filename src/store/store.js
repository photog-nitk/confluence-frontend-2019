import {
    createContext
} from 'react';
import jwt from 'jsonwebtoken';
import config from '../config';

const ltoken = (localStorage.getItem('cToken') !== null) ? true : false;
var user;
if (ltoken) {
    user = jwt.verify(localStorage.getItem('cToken'), config.JWTKEY)
}


const Context = createContext({
    user: (user !== null) ? user : null,
    isAuth: (ltoken && user !== null) ? true : false,
    errors: [],
    token: localStorage.getItem('cToken')

})

export default Context;