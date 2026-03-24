'use strict';
const {
  Model
} = require('sequelize');
const tbd_carrito_detalle = require('./tbd_carrito_detalle');
module.exports = (sequelize, DataTypes) => {
  class tbb_carrito extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  tbb_carrito.init({
    id_usuario: {
      type:DataTypes.INTEGER,
              allowNull:false
    },
    estado: {
       type:DataTypes.STRING,
              allowNull:false
    },
    total: {
       type:DataTypes.FLOAT,
              allowNull:false
    },
    fecha_creacion: {
       type:DataTypes.DATE,
              allowNull:false
    }
  }, {
    sequelize,
    modelName: 'tbb_carrito',
  });
  tbb_carrito.associate = (models) => {
    tbb_carrito.belongsTo(models.tbc_usuarios, {
      foreignKey: 'id_usuario',
      as: 'tbc_usuarios'
    });
  }
  tbb_carrito.associate = (models) => {
    tbb_carrito.hasMany (models.tbd_carrito_detalle, {
      foreignKey: 'id_carrito_detalle',
      as: 'tbd_carrito_detalle'
    });
  }
  return tbb_carrito;
};