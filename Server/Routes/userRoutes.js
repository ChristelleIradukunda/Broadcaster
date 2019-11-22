import express from 'express';
import signUp from '../Controller/signup';
import signIn from '../Controller/signin';
import {postNew, GetAll, getOne, DeleteOne, modifyRecord} from '../Controller/RedFlagRecord';

const UserRouter = express.Router();

UserRouter.post ('/api/v1/signup', signUp);
UserRouter.post ('/api/v1/signin', signIn);
UserRouter.post ('/api/v1/redflag', postNew);
UserRouter.get ('/api/v1/redflag', GetAll);
UserRouter.get ('/api/v1/redflag/:id', getOne);
UserRouter.delete ('/api/v1/redflag/:id', DeleteOne);
UserRouter.put ('/api/v1/redflag/:id', modifyRecord);


export default UserRouter;

