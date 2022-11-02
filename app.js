import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
dotenv.config();
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;



app.get('/', (req, res) => {
    res.locals.title='Landing Page';
    res.render('landing')
  })
app.get('/home', (req, res) => {
    res.locals.title='Home Page';
    res.render('pages/home')
})


app.use(express.static(path.join(__dirname, 'public')))
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.json())


app.listen(process.env.port, () => {
    console.log(`Example app listening on port ${port}`)  })