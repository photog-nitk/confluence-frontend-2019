import React from 'react'
import {Link} from 'react-router-dom';

const Error404 = ()=>(<div>
    <h4>Error 404</h4>
    <h5>On the way to <Link to='/'>Home</Link>!</h5>
</div>)

export default Error404;