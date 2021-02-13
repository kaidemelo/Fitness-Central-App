const express = require('express');
const app = express();
const path = require('path');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const port = 3000;

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port);



// const users = [
//   { name: 'Anston', age: 22 },
//   { name: 'Kelvin', age: 21 },
//   { name: 'Michelle', age: 22 }
// ];

// const posts = [
//   { title: 'My fav foods' }
// ];

// app.get('/', (req, res) => {
//   res.send({
//     msg: 'Hello',
//     user: { }
//   });
// });

// app.get('/users', (req, res) => {
//   res.status(200).send(users);
// });

// app.get('/users/:name', (req, res) => {
//   const { name } = req.params;
//   const user = users.find((user) => user.name === name);
//   if (user) {
//     res.status(200).send(user);
//   } else {
//     res.status(404).send('Not found');
//   }
// });

// app.get('/posts', (req, res) => {
//   console.log(req.query);
//   const { title } = req.query;
//   if (title) {
//     const post = posts.find((post) => post.title === title);
//     if (post) res.status(200).send(post);
//     else res.status(404).send('Not found');
//   }
//   res.status(200).send(posts);
// });

// app.listen(3000, () => {
//   console.log(`Server is running on port: ${port}`);
// });




// app.use(
//   auth({
//     authRequired: false,
//     auth0Logout: true,
//     issuerBaseURL: process.env.ISSUER_BASE_URL,
//     baseURL: process.env.BASE_URL,
//     clientID: process.env.CLIENT_ID,
//     secret: process.env.SECRET,
//   })
// );
// app.get('/', (req, res) => {
//     res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
//   })
// require('dotenv').config();
// const { auth } = require('express-openid-connect');
// const port = process.env.PORT || 3000;


// const express = require('express')
// const http =require('http');
// const fs =require('fs');
// const app = express()
// const users = [{name:'Name'}]

// app.get('/users',(req,res)=>{
//     res.json(users)
// })
// app.post ('/users',(req,res)=>{
//     res.json(users)
// })

// const server = http.createServer((req,res)=>{

//     console.log(req.url, req.method)
//    //set head 
//     res.setHeader('Content-Type','text/html');
    
//     let path ='./public/';
//     switch(req.url){
//         case'/':
//         path += 'index.html'
//         res.statusCode = 200;
//         break
        
//         case'/about':
//         path += 'about.html'
//         res.statusCode = 200;
//         break

//         case '/user':
//             path += 'users'
//             res.statusCode = 200;
//             break

//         default:
//             path+= '404.html'
//             res.statusCode = 404;
//             break

//     }
      
//     //reading the HTML file 
//     fs.readFile(path, 'utf8', (err, data) =>{
//         if(err){
//             console.log(err);
//             res.end()
//             return
//         }
//         else {
            
//             //console.log(data);
          
//             res.end(data)
// }

//     } );
// })

// // server listen
// server.listen(8000,'localhost', ()=>{
//     console.log('listening for requests made on port 8000')
// })