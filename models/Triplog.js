const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Triplog extends Model {}

Triplog.init(
  {
    id: {
      type: DataTypes.INTEGER,
      notnull: true,
      primaryKey: true,
      autoIncrement: true,
      notempty: true,
    },
    title: {
      type: DataTypes.STRING,
      notnull: true,
      notempty: true,
    },
    content: {
      type: DataTypes.STRING,
      notnull: true,
      notempty: true,
    },
    created_at: {
      type: DataTypes.DATE,
      notempty: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
        notempty: true,
        notnull: true,
      },
    },
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'triplog',
  }
);

module.exports = Triplog;
