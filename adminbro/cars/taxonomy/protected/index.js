const actions = require("./action");
module.exports = {
  id: "protected",
  actions: { ...actions },
  navigation: {
    name: "Taxonomy",
  },
  properties: {
    name: {
      isVisible: { list: true, filter: false, show: true, edit: true },
    },
    slug: {
      isVisible: { list: true, filter: false, show: true, edit: true },
    },
    term_grup: {
      isVisible: { list: false, filter: false, show: false, edit: false },
    },
  },
};
