'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('tbb_productos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_categoria: {
        type: Sequelize.INTEGER,
        allowNull:false,
        references: {
          model: 'tbb_categoria',
          key: 'id'
        }
      },
      nombre: {
        type: Sequelize.STRING(100),
        allowNull:false
      },
      descripcion: {
        type: Sequelize.STRING(255),
        allowNull:false
      },
      precio: {
        type: Sequelize.FLOAT,
        allowNull:false
      },
      stock: {
        type: Sequelize.INTEGER,
        allowNull:false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('tbb_productos');
  }
};