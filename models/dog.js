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

      Dog.hasMany(models.Vote, {
        as: 'votesCounted',
        foreignKey: 'dogId',
      })
    }
  }
  Dog.init({
    breed: DataTypes.STRING,
    name: DataTypes.STRING,
    photo: DataTypes.STRING,

    intelligence: {
      type: DataTypes.INTEGER,
      validate:{
        min: 0,
        max: 5,
      },
    },
    loyalty: {
      type: DataTypes.INTEGER,
      validate:{
        min: 0,
        max: 5,
      },
    },
    energy: {
      type: DataTypes.INTEGER,
      validate:{
        min: 0,
        max: 5,
      },
    },
    affectionate: {
      type: DataTypes.INTEGER,
      validate:{
        min: 0,
        max: 5,
      },
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