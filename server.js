const express=require("express")
require("dotenv").config();
const path=require("path")
const bodyParser=require("body-parser")
const getPage_Route=require("./srec/routeFolder/getRoute")
const App=express()
App.set("view engine","ejs")
App.set("views",path.join(__dirname,"view"))

App.use(bodyParser.urlencoded({extended:true}));
App.use(bodyParser.json());
App.use("/bootstrap",express.static(path.join(__dirname,"node_modules/bootstrap/dist")));
App.use("/jquery", express.static(path.join(__dirname, "node_modules/jquery/dist")));
// App.use(express.static(path.join(__dirname,"public")));
App.use(express.static(path.join(__dirname, "public")))
// App.get('/sitemap.xml', (req, res) => {
//     res.header('Content-Type', 'application/xml');
//     res.sendFile(path.join(__dirname, 'sitemap.xml'));
// });
App.use((req, res, next) => {
    if (req.hostname === 'serach-querry.onrender.com') {
      return res.redirect(301, 'https://mysearch-query.onrender.com' + req.originalUrl);
    }
    next();
  });
  

App.use(getPage_Route)
const PORT=process.env.PORT||3000
App.listen(PORT,()=>{
    console.log(`app listening on port ${PORT}`)

})