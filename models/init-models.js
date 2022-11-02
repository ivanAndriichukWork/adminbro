var DataTypes = require("sequelize").DataTypes;
var _post_meta = require("./post_meta");
var _posts = require("./posts");
var _schema_migrations = require("./schema_migrations");
var _taxonomy_relationship = require("./taxonomy_relationship");
var _term_taxonomy = require("./term_taxonomy");
var _terms = require("./terms");

function initModels(sequelize) {
  var post_meta = _post_meta(sequelize, DataTypes);
  var posts = _posts(sequelize, DataTypes);
  var schema_migrations = _schema_migrations(sequelize, DataTypes);
  var taxonomy_relationship = _taxonomy_relationship(sequelize, DataTypes);
  var term_taxonomy = _term_taxonomy(sequelize, DataTypes);
  var terms = _terms(sequelize, DataTypes);

  posts.belongsToMany(term_taxonomy, { as: 'taxonomy_term_id_term_taxonomies', through: taxonomy_relationship, foreignKey: "object_id", otherKey: "taxonomy_term_id" });
  term_taxonomy.belongsToMany(posts, { as: 'object_id_posts', through: taxonomy_relationship, foreignKey: "taxonomy_term_id", otherKey: "object_id" });
  post_meta.belongsTo(posts, { as: "post", foreignKey: "post_id"});
  posts.hasMany(post_meta, { as: "post_meta", foreignKey: "post_id"});
  taxonomy_relationship.belongsTo(posts, { as: "object", foreignKey: "object_id"});
  posts.hasMany(taxonomy_relationship, { as: "taxonomy_relationships", foreignKey: "object_id"});
  taxonomy_relationship.belongsTo(term_taxonomy, { as: "taxonomy_term", foreignKey: "taxonomy_term_id"});
  term_taxonomy.hasMany(taxonomy_relationship, { as: "taxonomy_relationships", foreignKey: "taxonomy_term_id"});

  return {
    post_meta,
    posts,
    schema_migrations,
    taxonomy_relationship,
    term_taxonomy,
    terms,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
