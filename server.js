const http =require('http');
const fs =require('fs');

const server = http.createServer((req,res)=>{

    console.log(req.url, req.method)
   //set head 
    res.setHeader('Content-Type','text/html');
    
    
      
    
    //reading the HTML file 
    fs.readFile('./public/index.html', 'utf8', (err, data) =>{
        if(err){
            console.log(err);
            res.end()
            return
        }
        else {
            
            //console.log(data);
            res.end(data)
}

    } );
})
// server listen
server.listen(8000,'localhost', ()=>{
    console.log('listening for requests made on port 3000')
})