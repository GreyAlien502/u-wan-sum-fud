var express = require('express');
var reload = require('reload');
var app = express();
app.set('port', process.env.PORT || 3000);

app.use(express.static('app/public'));
app.use(require('./routes/index-route'));
app.set('view engine', 'ejs');
app.set('views', 'app/views');

mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/');
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
	  console.log('MongoDB connected')
});




var server = app.listen(app.get('port'), function(){
    console.log("listening on port " + app.get('port'));
});

reload(app);
