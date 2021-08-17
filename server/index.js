const express = require('express')
const app = express()
const path = require('path')
const port = process.env.PORT || 4040

// include and initialize the rollbar library with your access token
// include and initialize the rollbar library with your access token
var Rollbar = require("rollbar");
var rollbar = new Rollbar({
  accessToken: '9efeea872d3a4e6d9bfa472df5dc6b75',
  captureUncaught: true,
  captureUnhandledRejections: true
});

// record a generic message and send it to Rollbar
rollbar.log("Hello world!");



app.use(express.json())

app.use(express.static('public'))
app.get('/', (req, res) => {
    rollbar.log("Hello Brady, Dominator of Code.");
    doAThing()
    res.sendFile(path.join(__dirname, './public/index.html'))
})


app.listen(port, () => console.log(`Number ${port}, it is time for your deconstruction. Please procede to the engine bay.`))