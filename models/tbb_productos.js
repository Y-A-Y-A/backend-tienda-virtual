'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tbb_productos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  tbb_productos.init({
    id_categoria: {
      type:DataTypes.INTEGER,
              allowNull:false,
              
    },
    nombre: {
      type:DataTypes.STRING(100),
              allowNull:false
    },
    descripcion: {
      type:DataTypes.STRING(255),
              allowNull:false
    },
    precio: {
      type:DataTypes.FLOAT,
              allowNull:false
    },
    stock: {
      type:DataTypes.INTEGER,
              allowNull:false
    }
  }, {
    sequelize,
    modelName: 'tbb_productos',
  });
  return tbb_productos;
};