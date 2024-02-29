 const { error } = require("console");
const fs = require("fs")

// console.log(fs)

console.log('Starting');

// fs.writeFileSync("Tushar.txt" , "Tushar is a coder ")

fs.writeFile( "Tushar.tx" , " Hello Ms Good Morning" , ()=>{
    console.log('Done')
    fs.readFile("Tushar.txt" , (error,data)=>{
        console.log(error , data.toString());
        
    })
})

fs.appendFile("Tushar.tx" , "Tushar is a good coder give him a job" , (e,d)=>{
    console.log(d);
    
})
console.log('Ending');
