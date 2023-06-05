'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Dog extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Dog.init({
    breed: {
      type: DataTypes.STRING,
      allowNull: false,
      onDelete: 'CASCADE'
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      onDelete: 'CASCADE'
    },
    photo: {
      type: DataTypes.STRING,
      allowNull: false,
      onDelete: 'CASCADE'
    },
  		// profileId: { type: Sequelize.INTEGER },
      profileId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        onDelete: 'CASCADE',
        references: {
          model: 'Profiles',
          key: 'id',
        },
      },
    
  }, {
    sequelize,
    modelName: 'Dog',
  });
  return Dog;
};