const express = require('express')
const app = express()
const path = require('path')
const port = process.env.PORT || 6543

// include and initialize the rollbar library with your access token
// include and initialize the rollbar library with your access token
var Rollbar = require("rollbar");
var rollbar = new Rollbar({
  accessToken: '9efeea872d3a4e6d9bfa472df5dc6b75',
  captureUncaught: true,
  captureUnhandledRejections: true,
  endpoint: "https://api.rollbar.com/api/1/item",
});

// record a generic message and send it to Rollbar




app.use(express.json())


app.get('/', (req, res) => {
    rollbar.log("Hello world!");
    res.sendFile(path.join(__dirname, './public/index.html'))
})

app.get('/thing', (req, res) => {
    try {
        doTheTHing()
    } catch(err) {
        console.log(err)
        rollbar.error(err)
    }
})


app.use(express.static('public'))
app.listen(port, () => console.log(`Number ${port}, it is time for your deconstruction. Please procede to the engine bay.`))