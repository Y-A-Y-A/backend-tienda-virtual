const Sequelize = require('sequelize');
const usuario = require('../models').usuario;

module.exports = {
    create(req, res ){
        return usuario
            .create({
                nombre: req.body.nombre
            })
            .then(usuario => res.status(200).send(usuario))
            .catch(error => res.status(400).send(error))
    },
    list(_, res){
        return usuario.findAll({})
            .then(usuario => res.status(200).send(usuario))
            .catch(error => res.status(400).send(error))

    },
    find(req, res){
        return usuario.findAll({
            where:{
                nombre: req.params.nombre,
            }
        })
        .then(usuario => res.status(200).send(usuario))
        .catch(error => res.status(400).send(error))
    },
    delete(req, res){
        return usuario.destroy({
            where: {
                id: req.params.id
            }
        })
        .then(usuario => res.status(200).send({message: "eliminada correctamente"}))
        .catch(error => res.status(400).send(error))
    },
    update(req, res){
        return usuario.update(
            {
                nombre: req.body.nombre
            },
            {
                where: {
                    id: req.params.id
                }
            }
        )
        .then(() => res.status(200).send({message: "Actualizado correctamente"}))
    }
};