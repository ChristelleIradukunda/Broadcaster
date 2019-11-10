const express = require ('express');
const app = express();

app.use((req, res, next) => {
    res.status(200).json({
    message:'Can\'t find module'
    });
});

module.exports = app;


