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
      Dog.belongsTo(models.Profile, { foreignKey: 'profileId' })
    }
  }
  Dog.init({
    breed: DataTypes.STRING,
    name: DataTypes.STRING,
    photo: DataTypes.STRING,

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