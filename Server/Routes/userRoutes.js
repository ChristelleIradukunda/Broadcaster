import express from 'express';
import signUp from '../Controller/signup';
import signIn from '../Controller/signin';


const UserRouter = express.Router();

UserRouter.post ('/api/v1/signup', signUp);
UserRouter.post ('/api/v1/signin', signIn);

export default UserRouter;