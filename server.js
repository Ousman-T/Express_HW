const express = require('express');
const app = express();
const PORT = 3000;


app.get('/greeting/:name', (req, res) => {
    console.log(req.params.name);
    res.send(`Hello ${req.params.name}`);
});

app.get('/tip/:total/:tipPercentage', (req, res) => {
    res.send(`Total: ${req.params.total}, TipPercentage: ${req.params.tipPercentage}`)
})

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}...`);
});