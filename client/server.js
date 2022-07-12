import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import fetch from 'node-fetch'
import docenv from 'dotenv'

const app = express();
docenv.config();
const port = 4000;

app.use(express.json())
app.use(morgan('tiny'))
app.use(cors())

app.set('views', './views');
app.set('view engine', 'pug');

app.get('/', (req, res) => {
    console.log();
	res.render('index');
});

app.post('/saludar', async (req, res) => {
    const api_host = process.env.API_HOST;
    console.log("api host:", api_host);
    const { name } = req.body;    
    try {
        const response = await fetch(`${api_host}/saludar/${name}`, {
            method: 'get',
            headers: {'Content-Type': 'application/json'}
        });
        const data = await response.json();
        console.log("Respuesta de la api:", data.saludo)
        res.json({
            saludo: `${data.saludo}`
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            api: `${api_host}`,
            error: `${error.message}`
        });
    }
});

app.listen(port, () => {
	console.log(`Server started at port ${port}`);
});