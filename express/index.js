import express from 'express';
const app = express();

app.get('', (req, res)=>{
    res.send('<h1>Hello, this is Home Page</h1> <a href="/about">About Page</a>');
});

app.get('/about', (req, res)=>{
    res.send('Hello, this is about page');
});

app.get('/help', (req, res)=>{
    res.send([
        {
            name: 'Rajib Hasan',
            email: 'abc@gmail.com'
        },
        {
            name: 'Rakib Hasan',
            email: 'efd@gmail.com'
        }
    ]);
});

app.get('/input', (req, res)=>{
    res.send(`
    <input type="text" name="'userName" placeholder=${req.query.name} />
    <button>Submit</button>
    `);
});

app.get('/info', (req, res)=>{
    res.send(`Welcome to the info page. Search Query: ${req.query.name}`);
})

app.listen(5000);