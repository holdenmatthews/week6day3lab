const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json())

app.listen(4000, () => console.log('server running on port 4000'))

app.use(express.static(`${__dirname}/public`))

// include and initialize the rollbar library with your access token
var Rollbar = require('rollbar')
var rollbar = new Rollbar({
  accessToken: 'bce6a273a3c84059ae0571afbf02ec40',
  captureUncaught: true,
  captureUnhandledRejections: true,
})

// record a generic message and send it to Rollbar
rollbar.log('Hello world!')

const scaryFace = (req, res) => {
    rollbar.info('someone hit the big, red button')
    const image = "https://wallpaperaccess.com/full/1615594.jpg"

    res.status(200).send(image)
}

app.get("/scary-face", scaryFace)