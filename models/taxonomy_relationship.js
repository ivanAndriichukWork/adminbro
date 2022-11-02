const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('taxonomy_relationship', {
    object_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'posts',
        key: 'id'
      }
    },
    taxonomy_term_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'term_taxonomy',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'taxonomy_relationship',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "taxonomy_relationship_pkey",
        unique: true,
        fields: [
          { name: "object_id" },
          { name: "taxonomy_term_id" },
        ]
      },
    ]
  });
};
