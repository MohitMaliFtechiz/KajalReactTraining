const express = require('express');
const bodyParser = require('body-parser');
const app = express();
 port = 5000;
const userRoutes = require('.././routes/user')
const fs = require ('fs')
const os = require ('os');
const path = require('path')

app.use(userRoutes)
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// Parse JSON bodies
app.use(express.json());
console.log(os.arch())
console.log(os.hostname())
console.log(os.platform())
console.log(os.type())
console.log(path.dirname(''))

const freeMem = os.freemem();
console.log(`${freeMem / 1024 / 1024/ 1024}`)

const totalMem = os.totalmem();
console.log(`${totalMem / 1024 / 1024/ 1024}`)

app.get('/login', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  console.log('body data', req.body)
  // Do something with username and password
  res.send('successfully login');
});

fs.writeFileSync('read.txt', "hiii")
fs.writeFileSync('read.txt', "hiii how are u")
fs.appendFileSync('read.txt', " hlo i m good")
// fs.mkdirSync('kajal')

const buff_data = fs.readFileSync('read.txt', 'utf-8')
console.log(buff_data)
fs.renameSync('read.txt', 'write.txt')

//delete file
fs.unlinkSync("write.txt")
// app.get('/:id', (req, res) =>{
//   console.log(req.params['id'])
//   res.send(`hello world ${req.params['id']}`);
// })

app.listen(port, function(err){
  if(err) console.log(err)
  
  console.log(`Server is running on ${port}`)
})

