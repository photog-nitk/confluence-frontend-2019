import jwt from 'jsonwebtoken'
import config from '../config.json'
export default function rootReducer(state, action) {
    const {
        type,
        payload
    } = action;

    switch (type) {
        case 'LOGIN':
        case 'ONBOARD':
            localStorage.setItem('cToken', payload)

            const user = jwt.verify(payload, config.JWTKEY)

            return {
                ...state,
                token: payload,
                    user,
                    isAuth: true,
                    onBoard: user.onBoard
            }
            case 'LOGOUT':
                localStorage.removeItem('cToken')
                return {
                    token: null,
                        isAuth: false,
                        user: null
                }
                default:
                    return state
    }
}