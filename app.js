//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set('view engine','ejs');

app.get("/", function(req, res){
  var today=new Date();

  var cd=today.getDay();
  var day="";

  if (cd==6 || cd==0){
    day="Weekend";
  // res.write("Weekend enjoy!!");
  }else{
    day="Weekday";
   // res.sendfile(__dirname+"/index.html");
    
  }

  res.render("list", {KindofDay : day});


});

app.listen(3000, function(){
  console.log("Server started on port 3000.");
});
