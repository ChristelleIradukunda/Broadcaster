import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import {users} from '../Models/db';
import validateUser from '../Validation/userValidation';


dotenv.config();

const SignUp = (req, res) => {
    const { error } = validateUser.validation(req.body);
    if (error) {
        res.status(400).json({
            status: 400,
            error: error.details[0].message,
        });
        return;
    }

    const User = users.find(checkUser => checkUser.email === req.body.email);

    if (User) {
        res.status(400).json({
            status: 400,
            message: "Email exist"
        });

        return;
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
        userId: newUser.userId,
        email: newUser.email,
        phoneNumber: newUser.phoneNumber
    }

    const token = jwt.sign(payload, 'secret_key', { expiresIn: '24hrs' });

    users.push(newUser);

    return res.status(201).json({
        status: 201,
        message: "User created successful",
        data: token
    });
}
export default SignUp;



