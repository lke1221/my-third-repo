const express = require('express');
const app = express();
const port = 3000;

app.get('/factorial/:number', function(req,res){
    const num = parseInt(req.params.number);
    let result = 1;
    for(let i=1; i<=num; i++){
        result = result*i;
    }
    res.send(`${result}`);
})
app.get('/factorial', (req,res) => res.redirect(`/factorial/${req.query.number}`));

app.listen(port, () => console.log(`Server listening on port ${port}!`))