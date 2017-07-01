var express = require('express');
var path = require('path');
var app = express();

app.set(‘port’, (process.env.PORT || 5000));

app.use('/static', express.static(path.join(__dirname,'/node_modules')));
app.use('/static', express.static(path.join(__dirname,'/publics/assets')));

app.get('/', (req, res)=>{
  res.sendFile(__dirname+'/publics/index.html');
});
app.listen(app.get(‘port’), function() {
  console.log(‘Node app is running on port’, app.get(‘port’));
});
