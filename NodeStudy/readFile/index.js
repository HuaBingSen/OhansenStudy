let fs = require('fs')
fs.readFile('./1.txt', (err, data) => {
  if(err !== null) 
    throw err
    console.log(data)
})