const express = require('express')
const app = express()
const path = require('path')
const port = process.env.PORT || 4040

const Rollbar = require('rollbar')
const rollbar =

app.use(express.json())

app.use(express.static('public'))
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'))
})


app.listen(port, () => console.log(`Number ${port}, it is time for your deconstruction. Please procede to the engine bay.`))