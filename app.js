const express = require('express');

// We create our own server named app
// Express server handling requests and responses
const app = express();

// our first Route
app.get('/', (req,res) => {
    console.log(req);
    res.send('<h1>Welcome Ironhacker. :)</h1>');
});

// our first Route
app.get('/pepe', (req,res) => {
    console.log(req);
    let a = Math.random()*50
    res.send('<h1>Welcome Juan. :) ' + a +'</h1>');
});


// Server Started
app.listen(3000, () => {
    console.log('My first app listening on port 3000!')
});