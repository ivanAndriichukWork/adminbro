const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('posts', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    ad_date: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.fn('now')
    },
    ad_date_gmt: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.fn('now')
    },
    ad_content: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ad_title: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ad_excerpt: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ad_status: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ad_modified: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ad_guid: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ad_order: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'posts',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "posts_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
