import jwt from 'jsonwebtoken';
import errMsg from '../controllers/errorMessages.js';

const auth = {};

auth.verify = (permission = 'customer') => {
    return (req, res, next) => {
        try {
            if (!req.headers.authorization) {
                if (permission === 'any') {
                    return next();
                }
                
                throw new Error('token not found');
            }

            const token = req.headers.authorization.split(' ')[1];
            // console.log(token)
            const decode = jwt.verify(token, process.env['JWT_KEY']);

            if (decode.role !== 'admin') {
                switch (permission) {
                    case 'admin':
                        return res.status(403).send(errMsg.FORBIDDEN);
                    case 'customer':
                        break;
                }
            }

            req.user = decode;
            next();
        } catch (err) {
            if (permission === 'any') {
                return next()
            }
            
            console.log(err);
            return res.status(401).send(errMsg.UNAUTHORIZED);
        }
    }
}

auth.permissions = {
    admin     : 'admin', // only admins can access
    customer  : 'customer',  // only admins and the user themselves can access
    any       : 'any'    // anyone can access (default)
}

export default auth;