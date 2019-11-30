/* eslint-disable no-undef */
import express from 'express';
import bodyParser from 'body-parser';
import Router from './Routes/userRoutes';
import dotenv from 'dotenv';

dotenv.config();
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', Router);
const port = 3001;
app.listen(process.env.PORT || port, function (){
 console.log(`server is running on PORT ${port}`)
});

export default app; 
