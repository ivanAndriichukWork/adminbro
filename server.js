const express = require("express");
const AdminBro = require("admin-bro");
const expressAdminBro = require("@admin-bro/express");
const AdminBroSequelize = require("@admin-bro/sequelize");
const db = require("./models");
const app = express();
const { request } = require("express");
const { protected } = require("./adminbro/cars/taxonomy");
AdminBro.registerAdapter(AdminBroSequelize);

const cars = db.term_taxonomy;
const adminBro = new AdminBro({
  rootPath: "/admin",
  loginPath: "/admin/login",
  resources: [
    {
      resource: db.posts,
      options: {
        navigation: {
          name: "General",
        },
        properties: {
          ad_date_gmt: {
            isVisible: { list: false, filter: false, show: false, edit: false },
          },
          ad_excerpt: {
            type: "richtext",
            isVisible: { list: false, filter: false, show: false, edit: false },
          },
          ad_content: {
            type: "richtext",
            isVisible: { list: false, filter: false, show: false, edit: true },
          },
          ad_status: {
            availableValues: [
              { value: "draft", label: "Draft" },
              { value: "publish", label: "Publish" },
            ],
          },
        },
      },
    },
    {
      resource: db.term_taxonomy,
      options: {
        id: "cars",
        actions: {
          new: {
            before: async (request) => {
              console.log(request);
              if (!request.payload.taxonomy) {
                request.payload = {
                  ...request.payload,
                  taxonomy: "tester",
                };
              }
              return request;
            },
          },
        },
        navigation: {
          name: "Taxonomy",
        },
        properties: {
          count: {
            isVisible: { list: false, filter: false, show: false, edit: false },
          },
          ad_excerpt: {
            type: "richtext",
            isVisible: { list: false, filter: false, show: false, edit: false },
          },
          ad_content: {
            type: "richtext",
            isVisible: { list: false, filter: false, show: false, edit: true },
          },
        },
      },
    },
    {
      resource: db.terms,
      options: { ...protected },
    },
  ],
  locale: {
    translations: {
      labels: {
        Cars: "Amazing Article",
      },
    },
  },
  branding: {
    companyName: "AdminBro Tutorial",
    softwareBrothers: false,
  },
});
const router = expressAdminBro.buildRouter(adminBro);
app.use(adminBro.options.rootPath, router);
app.use("/", (req, res) => res.send("Hello World"));

app.listen(8000, () => console.log("Listening to Port 8000"));
