const Sequelize = require('sequelize');
const producto = require('../models').producto;

module.exports = {
    create(req, res ){
        return producto
            .create({
                nombre: req.body.nombre
            })
            .then(producto => res.status(200).send(producto))
            .catch(error => res.status(400).send(error))
    },
    list(_, res){
        return producto.findAll({})
            .then(producto => res.status(200).send(producto))
            .catch(error => res.status(400).send(error))

    },
    find(req, res){
        return producto.findAll({
            where:{
                nombre: req.params.nombre,
            }
        })
        .then(producto => res.status(200).send(producto))
        .catch(error => res.status(400).send(error))
    },
    delete(req, res){
        return producto.destroy({
            where: {
                id: req.params.id
            }
        })
        .then(producto => res.status(200).send({message: "Producto eliminada correctamente"}))
        .catch(error => res.status(400).send(error))
    },
    update(req, res){
        return producto.update(
            {
                nombre: req.body.nombre
            },
            {
                where: {
                    id: req.params.id
                }
            }
        )
        .then(() => res.status(200).send({message: "Producto actualizado correctamente"}))
    }
};