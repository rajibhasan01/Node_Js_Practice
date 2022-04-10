// console.log("start exe...");

// setTimeout(()=>{
//     console.log("logic exe...");
// },2000);

// console.log("complete exe...");

let a = 10;
let b = 0;

const waitingData = new Promise ((resolve, reject)=>{
    setTimeout(()=>{
        resolve(30);
    },2000);
});

waitingData.then((data)=>{
    console.log(a+data)
})

console.log(a+b);