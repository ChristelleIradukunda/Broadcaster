/* eslint-disable no-undef */
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import {users} from '../Models/db';

dotenv.config();

const SignUp = (req, res) => {
  
    const User = users.find(checkUser => checkUser.email === req.body.email);

    if (User) {
       return res.status(409).json({
            status: 409,
            message: "Email exist"
        });
    }

    const hide = bcrypt.hashSync(req.body.password.trim(), 10);
    const userId = users.length + 1;
    const newUser = {
        userId,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        phoneNumber: req.body.phoneNumber,
        email: req.body.email,
        password: hide
    }
    const payload = {
        email: newUser.email   
    }
    const token = jwt.sign(payload, process.env.secret_key, { expiresIn: '24hrs' });

    users.push(newUser);

    return res.status(201).json({
        status: 201,
        message: "User created successful",
        data:token

    });
}
export default SignUp;



