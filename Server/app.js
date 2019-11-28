import express from 'express';
import bodyParser from 'body-parser';
import Router from './Routes/userRoutes';


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use('/', Router);
const PORT = 3001;
app.listen( PORT, function (){
 console.log(`server is running on PORT ${PORT}`)
});

export default app; 