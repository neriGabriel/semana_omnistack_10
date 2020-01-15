const express  = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const routes   = require('./routes.js');

//defino que usarei o express
const app = express();

//conecto com o mongodb via nuvem
mongoose.connect('mongodb+srv://neriGabriel:a10112013g@cluster0-0uek6.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true, 
    useUnifiedTopology: true
});

/*TEM QUE SER NESSA ORDEM*/
//permitir acesso de outras ports
app.use(cors());

//falo pro express que usarei json
app.use(express.json());

//cadastro as rotas definidas no arquivo ./routes.js
app.use(routes);

//defino para rodar na porta desejada
app.listen(3333);