const carritocontroller = require('../Conrtrollers/controller_carrito');

module.export = (app) => {
    app.get('/api/carrito', carritocontroller.list);
    app.get('api/carrito/:nombre', carritocontroller.find);
    app.post('api/carrito/nombre/:nombre', carritocontroller.create),
    app.put('api/carrito/:id',carritocontroller.update);
    app.delete('api/carrito/id:', carritocontroller.delete);
}