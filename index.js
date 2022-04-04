const express = require('express');
const mongoose = require('mongoose');
const app = express();


// forma de ler json / middlewares
app.use(
    express.urlencoded({
        extended: true
    })
);

app.use(express.json());

// rotas da API
const personRoutes = require('./routes/personRoutes');
app.use('/person', personRoutes);

// rota inicial / endpoint
app.get('/', (req, res) => {
    // mostrar req
    res.json({message: 'oi espress'})
});

// entrega uma porta se conectar ao Banco

mongoose.connect(
        'mongodb+srv://thiago:iDFajF0gN9F8PLvl@apicluster.alltq.mongodb.net/APIDatabase?retryWrites=true&w=majority'
        )
        .then(() => {
            console.log('MongoDB conectado');
            app.listen(4000);
        }).catch((err) => console.log('Caiu no catch index',err));