const express = require('express')
const path = require('path')
let bp=require('body-parser');
var MongoClient = require('mongodb').MongoClient;
const PORT = process.env.PORT || 5000
let app=express();
url="mongodb+srv://AJITH:ajay-ALTI-8@cluster0.9nz68.mongodb.net/?retryWrites=true&w=majority";
express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .listen(PORT, () => console.log(`Listening on ${i PORT }`))
MongoClient.connect(url, function(err, db) {
       if (err) throw err;
       let dbo=db.db("WT");
       dbo.collection("bankc").insert({"name":"Ajith","bal":"10000","mail":"ajith@gmail.com"},(err,result)=>               {                                                            console.log(result);
       });
});
app.get("/viewc",(req,res)=>{
    MongoClient.connect(url, function(err, db) {
       if (err) throw err;
       let dbo=db.db("WT");
       dbo.collection("bankc").find((err,result)=>               {                                                            console.log(result);
      res.send(JSON.stringify(result));                           });                                                     });
});










