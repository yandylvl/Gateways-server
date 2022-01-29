const jsonServer = require("json-server");
const auth = require("json-server-auth");

const app = jsonServer.create();
const router = jsonServer.router("db.json");
// const port = process.env.PORT || 3004;

// Bind the router db to the app
app.db = router.db;

// Permission rules
// const rules = auth.rewriter({
//   users: 600,
// });

// app.use(rules);
app.use(auth);
app.use(router);
app.listen(5000);
