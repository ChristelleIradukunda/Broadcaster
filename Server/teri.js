import express from 'express';
import bodyParser from 'body-perser'

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('run/one');

const PORT = 5000;
app.listen(PORT, function() {
    console.log(`server is running on PORT ${PORT}`)
});

export default app;