import express from 'express';
import postRecord from '../Controller/RedFlagRecord';


const router = express.Router();

router.post ('/api/v1/entries', postRecord);


export default router;

