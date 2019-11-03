const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');

const {Agendamento, Credenciado} = require('./app/models');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.post('/api/agendar', async (req, res) => {
    try {
        const agendamento = await Agendamento.create(req.body);
        res.status(201).json(agendamento); 
    }catch(error){
        return res.status(500).json({error: error.message});
    }
});

app.post('/api/agendamentos/alterar/:id', async (req, res) => {
    try{
        const { id } = req.params;
        const [ updated ] = await Agendamento.update(req.body, {where: {cd_agenda: id}});
        
        if(updated){
            const updatedAgendamento = await Agendamento.findOne({where: {cd_agenda: id}});
            return res.status(200).json(updatedAgendamento);
        }

        throw new Error('Agendamento não encontrado');

    } catch(error){
        return res.status(500).send(error.message);
    }
});

app.get('/api/agendamentos/excluir/:id', async(req, res) => {
    
    Post.destroy({where: {'id': req.params.id}}).them(function(){
        req.send("Agendamento Excluido com Sucesso");
        res.redirect("/api/agendamentos");
    }).catch(function(erro){
        req.send("Erro - Agendamento não encontrado");
        res.redirect("/api/agendamentos");
    })  
});

app.post('/api/credenciados', (req, res) => {
    Credenciado
    .create(req.body)
    .then(re => {
        res.json(re);
    })
    .catch(err => {
        console.error(err);
        res.status(400);
        res.send(err);
    });
});


app.get('/api/credenciados', async (req, res) => {
    const credenciados = await Credenciado.findAll({where: {
        crm: null
    }});
    res.json(credenciados);
});

app.get('/api/medicos', async (req, res) => {
    const medicos = await Credenciado.findAll({
        where: {
            crm: {
                [Sequelize.Op.ne]: null
            }
        }
    });

    res.json(medicos);
});

app.get('/api/agendamentos', async(req, res) => {
    const agendamentos = await Agendamento.findAll();
    res.json(agendamentos);
});

app.listen(3000, () => console.log('a api foi iniciada'));