import express from 'express';
import bodyParser from 'body-parser';
import router from '../Server/Routes/routes'; 
import UserRouter from './Routes/userRoutes';


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', router);
app.use('/', UserRouter);
const PORT = 3000;
app.listen( PORT, function(){
 console.log(`server is running on PORT ${PORT}`)
});

export default app; 
