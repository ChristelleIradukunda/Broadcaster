import express from 'express';
import signUp from '../Controller/signup';
import signIn from '../Controller/signin';
import {validatePost, validateModify} from '../Validation/recordValidation';
import {postNew, GetAll, getOne, DeleteOne, modifyRecord} from '../Controller/RedFlagRecord';
import auth from '../Middleware/Auth';
import validateUser from '../Validation/userValidation';


const Router = express.Router();

Router.post ('/api/v1/signup', validateUser,signUp);
Router.post ('/api/v1/signin',signIn);
Router.post ('/api/v1/redflag', auth, validatePost, postNew);
Router.get ('/api/v1/redflag', auth, GetAll);
Router.get ('/api/v1/redflag/:id',auth, getOne);
Router.delete ('/api/v1/redflag/:id',auth, DeleteOne);
Router.put ('/api/v1/redflag/:id', auth, validateModify, modifyRecord);

export default Router;
