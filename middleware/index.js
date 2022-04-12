import e from 'express';
import express from 'express';

const app = express();

const reqFilter = (req, res, next)=>{
    if (!req.query.age){
        res.send('Please provide age');
    }
    else if(req.query.age < 18){
        res.send('You are underage')
    }
    else{
        next()
    }
};

app.use(reqFilter);

app.get('/',(req, res)=>{
    res.send('Welcome to Home Page')
});

app.get('/user',(req, res)=>{
    res.send('Welcome to User Page')
});

app.listen(5000);