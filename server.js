const express = require("express");
require("dotenv").config();
const path = require("path");
const bodyParser = require("body-parser");

const getPage_Route = require("./srec/routeFolder/getRoute");

const App = express();

/* ============================================================
   APP SETTINGS
============================================================ */

App.set("view engine", "ejs");
App.set("views", path.join(__dirname, "view")); // ⚠️ confirm this matches your real folder name (view vs views)

/* ============================================================
   BODY PARSER
============================================================ */

App.use(bodyParser.urlencoded({ extended: true }));
App.use(bodyParser.json());

/* ============================================================
   STATIC FILES
============================================================ */

App.use(
  "/bootstrap",
  express.static(path.join(__dirname, "node_modules/bootstrap/dist"))
);

App.use(
  "/jquery",
  express.static(path.join(__dirname, "node_modules/jquery/dist"))
);

App.use(express.static(path.join(__dirname, "public")));

/* ============================================================
   GLOBAL SEO VARIABLES
   Available in ALL EJS pages
============================================================ */

App.use((req, res, next) => {

    const currentYear = new Date().getFullYear();

    res.locals.currentYear = currentYear;
    res.locals.nextYear = currentYear + 1;
    res.locals.previousYear = currentYear - 1;

    res.locals.siteName = "UC Tech Hub";
    res.locals.siteUrl = "https://mysearch-query.onrender.com";

    // Dynamic Canonical URL
    res.locals.canonical =
        `${res.locals.siteUrl}${req.originalUrl}`;

    // Current URL
    res.locals.currentUrl =
        `${res.locals.siteUrl}${req.originalUrl}`;

    next();

});

/* ============================================================
   SERVICE WORKER
============================================================ */

App.get("/sw.js", (req, res) => {

    res.setHeader("Content-Type", "application/javascript");

    res.sendFile(
        path.join(__dirname, "public", "sw.js")
    );

});

/* ============================================================
   REDIRECT OLD DOMAIN
============================================================ */

App.use((req, res, next) => {

    if (req.hostname === "serach-querry.onrender.com") {

        return res.redirect(
            301,
            "https://mysearch-query.onrender.com" +
            req.originalUrl
        );

    }

    next();

});

/* ============================================================
   ROUTES
============================================================ */

App.use(getPage_Route);

/* ============================================================
   404 PAGE
   Reuses the same notFound view your controller already uses
   for missing university/polytechnic profiles, so there's only
   one 404 template to maintain across the whole app.
============================================================ */

App.use((req, res) => {

    res.status(404).render("./resourceFolder/notFound", {
        title: "404 - Page Not Found",
        url: req.originalUrl
    });

});

/* ============================================================
   SERVER
============================================================ */

const PORT = process.env.PORT || 3000;

App.listen(PORT, () => {

    console.log(
        `✅ Server running on http://localhost:${PORT}`
    );

});