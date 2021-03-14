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
app
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
MongoClient.connect(url, function(err, db) {
       if (err) throw err;
       let dbo=db.db("WT");
       	//dbo.collection("bankc").drop();
       /* dbo.collection("bankc").insert([{"name":"AJITH KUMAR","bal":"10000","no":"XXXX2579","mail":"ajith@gmail.com"},{"name":"PREM KUMAR","bal":"25000","no":"XXXX4592","mail":"prem@gmail.com"},{"name":"SANJAY","bal":"10000","no":"XXXX3789","mail":"sanjay@gmail.com"},{"name":"SIVASUNDHAR","bal":"20000","no":"XXXX2894","mail":"sivasundhar@gmail.com"},{"name":"DEENA","bal":"24000","no":"XXXX9876","mail":"deena@gmail.com"},{"name":"SASI","bal":"18900","no":"XXXX6734","mail":"sasi@gmail.com"},{"name":"GUNA","bal":"50000","no":"XXXX2435","mail":"guna@gmail.com"},{"name":"RAM","bal":"60000","no":"XXXX6712","mail":"ram@gmail.com"},{"name":"SHEELA","bal":"10000","no":"XXXX5673","mail":"sheela@gmail.com"},{"name":"SHOBHANA","bal":"200000","no":"XXXX4572","mail":"shobhana@gmail.com"}],(err,result)=>               {                                                            console.log(result);
       });*/

      /*	dbo.collection("bankt").insert([{"mail":"ajith@gmail.com","t":[{"time":Date(),"p":"","amt":"","type":"Debit"}]},{"mail":"ajith@gmail.com","t":[{"time":Date(),"p":"","amt":"","type":"Debit"}]},{"mail":"ajith@gmail.com","t":[{"time":Date(),"p":"","amt":"","type":"Debit"}]},{"mail":"ajith@gmail.com","t":[{"time":Date(),"p":"","amt":"","type":"Debit"}]},{"mail":"ajith@gmail.com","t":[{"time":Date(),"p":"","amt":"","type":"Debit"}]},{"mail":"ajith@gmail.com","t":[{"time":Date(),"p":"","amt":"","type":"Debit"}]},{"mail":"ajith@gmail.com","t":[{"time":Date(),"p":"","amt":"","type":"Debit"}]},{"mail":"ajith@gmail.com","t":[{"time":Date(),"p":"","amt":"","type":"Debit"}]},{"mail":"ajith@gmail.com","t":[{"time":Date(),"p":"","amt":"","type":"Debit"}]},{"mail":"ajith@gmail.com","t":[{"time":Date(),"p":"","amt":"","type":"Debit"}]}],(err,result)=>               {                                                            console.log(result);                                     });*/
});
app.get('/test',(req,res)=>{
	res.send("Hello");
});
app.get('/viewc',(req,res)=>{
	console.log('ffg');
         MongoClient.connect(url, function(err, db) {
          if (err) throw err;
          let dbo=db.db("WT");

          dbo.collection("bankc").find({}).toArray((err,result)=>               {                                                           // console.log(result);
                            res.send(JSON.stringify(result));
	});                                                     });
});







app.listen(PORT, () => console.log(`Listening on ${PORT }`));

