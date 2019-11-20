import express from 'express';
import signUp from '../Controller/signup';
import signIn from '../Controller/signin';
import postNew from '../Controller/RedFlagRecord';

const UserRouter = express.Router();

UserRouter.post ('/api/v1/signup', signUp);
UserRouter.post ('/api/v1/signin', signIn);
UserRouter.post ('/api/v1/entry', postNew);


export default UserRouter;

