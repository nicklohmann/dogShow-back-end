'use strict'
const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class Vote extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
    Vote.belongsTo(models.Profile, { foreignKey: 'voterId' })
    Vote.belongsTo(models.Dog, { foreignKey: 'dogId' })
    }
  }

  Vote.init({
    value: {
      type: DataTypes.INTEGER,
      validate: {
        min: 0,
				max: 5,
      },
    },

    // profileId: DataTypes.INTEGER,
    dogId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Dogs',
        key: 'id',
      },
    },

    // voterId: DataTypes.INTEGER,
    voterId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Profiles',
        key: 'id',
      }
    },
  }, {
      sequelize,
      modelName: 'Vote' ,
  })
  return Vote
}
