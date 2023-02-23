import express from 'express';

const app = express();

app.get('/', function(req, res) {
  let name = (req.query["name"]?.toString() || "Administrate").trim();

  if (name.length > 500) {
    name = "REDACTED";
  }

  res.send(`👋 Hello ${name}! 🚀`);
});

const port = process.env["PORT"] || 3000;

process.stdout.write(`👂 Listening on port ${port}`);
app.listen(port);
