const categoriacontroller = require('../Conrtrollers/controller_categoria');

module.export = (app) => {
    app.get('/api/categorias', categoriacontroller.list);
    app.get('api/categorias/:nombre', categoriacontroller.find);
    app.post('api/categoria/nombre/:nombre', categoriacontroller.create),
    app.put('api/categoria/:id',categoriacontroller.update);
    app.delete('api/categoria/id:', categoriacontroller.delete);
}