let express = require('express')
const path = require('path')
let BodyParser=require('body-parser');
var MongoClient = require('mongodb').MongoClient;
let cors=require('cors');
const PORT = process.env.PORT || 5000
let app=express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded());
app.use(BodyParser.json());                                app.use(BodyParser.urlencoded({ extended: true }));

url="mongodb+srv://AJITH:ajay-ALTI-8@cluster0.9nz68.mongodb.net/?retryWrites=true&w=majority";
express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => {res.render('pages/index');
              console.log("ready");})
  .listen(PORT, () => console.log(`Listening on ${PORT }`))
/*ongoClient.connect(url, function(err, db) {
       if (err) throw err;
       let dbo=db.db("WT");
       dbo.collection("bankc").insert({"name":"Ajith","bal":"10000","mail":"ajith@gmail.com"},(err,result)=>               {                                                            console.log(result);
       });
});*/
app.get('/test',(req,res)=>{
	res.write("Hello");
});
express().get('/viewc',(req,res)=>{
	console.log('ffg');
	res.send("dddd");
   /* MongoClient.connect(url, function(err, db) {
       if (err) throw err;
       let dbo=db.db("WT");

       dbo.collection("bankc").findOne({'name':'Ajith'},(err,result)=>               {                                                            console.log(result);
                            res.send(JSON.stringify(result));
	});                                                     });*/
});










