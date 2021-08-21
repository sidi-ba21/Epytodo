const express = require('express')
const app = express()
const port = 8789
const datetime = new Date()

app.get('/', (req, res) => {
  res.json({ message: "This is a JSON response" })
  /* res.format({
      "text/plain": () => {
        res.send("Just some words");
      },
      "text/html": () => {
        res.send("<h1>Here be HTML</h1>");
      },
      "application/json": () => {
        res.send({ message: "This is a JSON response" });
      },
      "text/xml":()=>{
        res.send('<?xml version="1.0">');
      },
      "default": () => {
    //     //any other types I don't have
        res.status(406).send("Not Acceptable");
      }
  });*/
})

app.get('/name/:name_users', (req, res) => {
  res.send(`Hello ${req.params.name_users} !`)
})

app.get('/date', (req, res) => {
  res.send(`${datetime.toISOString().slice(0,10)}`)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})