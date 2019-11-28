/* eslint-disable no-undef */
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

dotenv.config();

const auth = (req, res, next) => {
    const {token} = req.headers;
    console.log(token);
    if (!token || token === "" ) {
        return res.status(400).send({
            status: 400,
            message: 'Access denied, need to provided token'
        });
    }

    try {
        const decoded = jwt.verify(token, process.env.secret_key);
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(401).send({
            status: 401,
            message: 'Invalid token'
        });
    }
  };


  export default auth;