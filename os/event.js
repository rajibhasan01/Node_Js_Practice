import express from "express";
import EventEmitter from "events";

const app = express();
const event = new EventEmitter();

let count = 0;

event.on("countAPI", ()=>{
    count ++;
    console.log('event called', count);
});

app.get('/', (req, res)=>{
    res.send("api called");
    event.emit("countAPI");
});

app.get('/search', (req, res)=>{
    res.send("Search api called");
    event.emit("countAPI");
});

app.get('/update', (req, res)=>{
    res.send("Update api called");
    event.emit("countAPI");
});

app.listen(5000);