import fs from "fs/promises"

let a = await fs.readFile("Tushar.txt") 

let b = await fs.writeFile("Tushar.txt" , "\n\n\n\n\n\n\n\n\This is amazing Promise")

console.log(a.toString() , b);
