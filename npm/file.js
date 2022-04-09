import fs from 'fs';
import path from 'path';
import {fileURLToPath} from 'url';

// const __filename = fileURLToPath(import.meta.url);

// // 👇️ "/home/john/Desktop/javascript"
// const __dirname = path.dirname(__filename);
// console.log('directory-name 👉️', __dirname);

// // 👇️ "/home/borislav/Desktop/javascript/dist/index.html"
// const filePath = path.join(__dirname, 'files');

// for(let i=0;i<5;i++){
//     fs.writeFileSync(`${filePath}/hello${i}.txt`, "a simple test file");
// }

// fs.readdir(filePath, (err, files)=>{
//     files.forEach((file)=>{
//         console.log(fs.readFileSync(file))
//     })
// })

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dirPath = path.join(__dirname, 'crud');
const filePath = `${dirPath}/new.txt`;

fs.writeFileSync(filePath, 'this is simple text file');
// fs.readFile(filePath, 'utf8', (err, data)=>{
//     console.log(data);
// });

// same like above
// console.log(fs.readFileSync(filePath,'utf8'))

fs.appendFile(filePath, ' and file name is new.txt', (err)=>{
    if(!err){
        console.log(fs.readFileSync(filePath,'utf8'))
    }
})
// fs.appendFileSync(filePath," rajib")

// fs.rename(filePath, `${dirPath}/old.txt`, (err)=>{
//     if(!err){
//         console.log("file name in updated");
//     }
// })

// fs.unlinkSync(`${dirPath}/new.txt`);