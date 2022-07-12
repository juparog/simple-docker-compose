const express = require('express')
const morgan = require('morgan')
const app = express()
const port = 3000

app.use(express.json())
app.use(morgan('tiny'))

app.get('/saludar/:name', (req, res) => {
    console.log("sfgsdg");
    const { name } = req.params;
    res.json({
        "saludo": `Hola ${name}`
    });
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})