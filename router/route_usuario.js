const usuariocontroller = require('../Conrtrollers/controller_usuario');

module.export = (app) => {
    app.get('/api/producto', usuariocontroller.list);
    app.get('api/producto/:nombre', usuariocontroller.find);
    app.post('api/producto/nombre/:nombre', usuariocontroller.create),
    app.put('api/producto/:id', usuariocontroller.update);
    app.delete('api/producto/id:', usuariocontroller.delete);
}