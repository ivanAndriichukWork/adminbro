const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('post_meta', {
    meta_id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    post_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'posts',
        key: 'id'
      }
    },
    meta_key: {
      type: DataTypes.STRING,
      allowNull: true
    },
    meta_value: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'post_meta',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "post_meta_pkey",
        unique: true,
        fields: [
          { name: "meta_id" },
        ]
      },
    ]
  });
};
