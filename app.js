const express = require('express');
const app = express();
const path = require('path');


//para local: 
//app.listen(3000, ()=>console.log("Servidor funcionando"));
//Para nube:
const port = process.env.PORT||3001;
app.listen(port, ()=>console.log("Servidor funcionandoen el puerto ${port}"));


const publicPath = path.resolve(__dirname,'./public');

app.use(express.static(publicPath));

app.get('/', function(req, res){
  let htmlPath = path.resolve(__dirname,'./views/home.html')
 res.sendFile(htmlPath)
});
app.get('/contacto',function(req, res){
  res.send('Dejanos tu contacto');  
});
app.get('/unarray',function(req, res){
    res.send([2,4,5]);  
  });

  app.get('/unobjeto',function(req, res){
    res.send({name:"eder"});  
  });
