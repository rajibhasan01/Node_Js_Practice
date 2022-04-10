import express from 'express';
const app = express();

app.get('', (req, res)=>{
    res.send('Hello, this is Home Page');
});

app.get('/about', (req, res)=>{
    res.send('Hello, this is about page');
});

app.get('/help', (req, res)=>{
    res.send('Welcome, this is Help page');
});

app.listen(5000);