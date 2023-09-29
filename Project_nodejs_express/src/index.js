const express = require('express'); 
const morgan = require('morgan'); 
const path = require('path');
const app = express(); 
const hdbs = require('express-handlebars'); 

app.use(morgan('combined')); 

app.engine('handlebars', hdbs.engine({
    defaultLayout: 'main',
    extname : 'hdb'
}))

app.set('view engine', 'handlebars');
app.set('view', path.join(__dirname, 'resources\\views')) ; 

app.get('/', function(req, res){
    console.log("Hello world!!!"); 
})

app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`)
})