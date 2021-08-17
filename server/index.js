const express = require('express')
const app = express()
const path = require('path')
const port = process.env.PORT || 4040

var Rollbar = require("rollbar");
var rollbar = new Rollbar({
  accessToken: 'a51cff012e6845e789fec6d8d05ec400',
  captureUncaught: true,
  captureUnhandledRejections: true
});



app.use(express.json())

app.use(express.static('public'))
app.get('/', (req, res) => {
    rollbar.log("Hello Brady, Dominator of Code.");
    res.sendFile(path.join(__dirname, './public/index.html'))
})


app.listen(port, () => console.log(`Number ${port}, it is time for your deconstruction. Please procede to the engine bay.`))