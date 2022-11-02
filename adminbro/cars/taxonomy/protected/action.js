const AdminBro = require("admin-bro");
const { slugify } = require("transliteration");
module.exports = {
 
    edit: {
      before: async (request) => {
        console.log(request);
        if (request.payload.slug) {
          request.payload = {
            ...request.payload,
            slug: slugify(request.payload.slug),
          };
        }
        if (!request.payload.slug) {
          request.payload = {
            ...request.payload,
            slug: slugify(request.payload.name),
          };
        }
        return request;
      },
    },
    new: {
      before: async (request) => {
        console.log(request);
        if (request.payload.slug) {
          request.payload = {
            ...request.payload,
            slug: slugify(request.payload.slug),
          };
        }
        if (!request.payload.slug) {
          request.payload = {
            ...request.payload,
            slug: slugify(request.payload.name),
          };
        }
        return request;
      },
    },
 
};
