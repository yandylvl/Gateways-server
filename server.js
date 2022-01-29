const jsonServer = require("json-server");
const auth = require("json-server-auth");

const app = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults({ noCors: true });

const port = process.env.PORT || 5000;

// Bind the router db to the app
app.db = router.db;

// set default middlewares (logger, static, cors and no-cache)
app.use(middlewares);
app.use(auth);
app.use(router);
app.listen(port);
