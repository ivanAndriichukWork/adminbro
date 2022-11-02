const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cars', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    taxonomy: {
      type: DataTypes.STRING,
      allowNull: true
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    parent: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    count: {
      type: DataTypes.BIGINT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'term_taxonomy',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "term_taxonomy_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
