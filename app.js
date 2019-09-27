var express=require('express');
var app=express();
app.use(express.static('..//root/AssignmentDemoRailsApplication/app/assets/stylesheets'))

app.set('view engine', 'pug')

app.get('/',function(req,res){
  res.sendFile('index.html',{ root: '/root/AssignmentDemoRailsApplication/app/views/welcome' })
});

var server=app.listen(3000,function() {});
