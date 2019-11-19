import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import users from '../Models/users';
import validateUserSignIn from '../Validation/ValidateSignIn';

dotenv.config();

const signIn = (req, res) =>{
    const { error } = validateUserSignIn.validation(req.body);
    if (error) {
        res.status(400).json({
            status: 400,
            error: error.details[0].message,
        });
        return;
}

const findEmail = users.find(checkEmail => checkEmail.email === req.body.email);
if(!findEmail) {
    res.status(400).json({
        status: 400,
        message: 'Incorrect email or password'
    });
    return ;
}

const pwd = bcrypt.compareSync(req.body.password.trim(), findEmail.password);

if(!pwd){
    res.status(400).json({
        status: 400,
        message: 'Incorrect username or password'
    });
    return;
}
const payload = {
    userId: findEmail.userId,
    email: findEmail.email,
    phoneNumber: findEmail.phoneNumber
}

const token = jwt.sign(payload, 'secret_key', {expiresIn: '24hrs'});

return res.status(200).json({
    status:200,
    message: 'Succesfully logged In',
    data: token
});

}

export default signIn;
