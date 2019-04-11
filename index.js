var express = require('express');
var app = express();

app.get('/', (req, res) => {
    res.send('GraphQL is amazing!');
});

app.listen(8080, ()=> console.log('lavorando sulla porta 8080/graphql'));
