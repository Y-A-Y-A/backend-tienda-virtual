const productocontroller = require('../Conrtrollers/controller_producto');

module.export = (app) => {
    app.get('/api/producto', productocontroller.list);
    app.get('api/producto/:nombre', productocontroller.find);
    app.post('api/producto/nombre/:nombre', productocontroller.create),
    app.put('api/producto/:id', productocontroller.update);
    app.delete('api/producto/id:', productocontroller.delete);
}