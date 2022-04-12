import express from 'express';
import path from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, 'public');

const app = express();
// app.use(express.static(filePath));

app.get('', (_, res)=>{
    res.sendFile(`${filePath}/index.html`);
});

app.get('/about', (req, res)=>{
    res.sendFile(`${filePath}/about.html`);
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

app.get('*', (_, res)=>{
    res.sendFile(`${filePath}/pageNotFound.html`)
})

app.listen(5000);