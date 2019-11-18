import express from 'express';
import signUp from '../Controller/signup';


const UserRouter = express.Router();

UserRouter.post ('/api/v1/signup', signUp);


export default UserRouter;