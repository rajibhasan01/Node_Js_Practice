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

app.get('/info', (req, res)=>{
    
    res.send(`Welcome to the info page. Search Query: ${req.query.name}`);
})

app.listen(5000);