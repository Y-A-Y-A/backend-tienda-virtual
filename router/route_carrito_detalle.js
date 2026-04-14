const carritodetallecontroller = require('../Conrtrollers/controller_carrito_detalle');

module.export = (app) => {
    app.get('/api/carrito_detalle', carritodetallecontroller.list);
    app.get('api/carrito_detalle/:nombre', carritodetallecontroller.find);
    app.post('api/carrito_detalle/nombre/:nombre', carritodetallecontroller.create),
    app.put('api/carrito_detalle/:id', carritodetallecontroller.update);
    app.delete('api/carrito_detalle/id:', carritodetallecontroller.delete);
}