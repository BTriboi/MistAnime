const scrapper = require('./scrapper')
const express = require('express')
const { env } = require('process')
const cors = require('cors')

const app = express()
app.use(cors())

app.get('/', (req, res) => {
    res.send('Hello world🌍! Welcome to 🦄 MistAnime API 🧬 </br></br> Available routes :  <b>/Popular</b> ,  <b>/NewSeasons</b> ,  <b>/search/:query</b> ,  <b>/getAnime/:animeId</b> ,  <b>/getEpisode/:episodeId</b> </br></br> <b>Note that /Popular and /NewSeasons must include tha page number, as in /Popular/1</b>')
})

app.get('/Popular/:page', async (req, res) => {
    const result = await scrapper.popular(req.params.page)
    res.header("Content-Type", 'application/json');
    res.send(JSON.stringify(result, null, 4))
})

app.get('/NewSeasons/:page', async (req, res) => {
    const result = await scrapper.newSeason(req.params.page)
    res.header("Content-Type", 'application/json');
    res.send(JSON.stringify(result, null, 4))
})

app.get('/search/:query', async (req, res) => {

    const result = await scrapper.search(req.params.query)
    res.header("Content-Type", 'application/json');
    res.send(JSON.stringify(result, null, 4))
})

app.get('/getAnime/:query', async (req, res) => {

    const result = await scrapper.anime(req.params.query)
    res.header("Content-Type", 'application/json');
    res.send(JSON.stringify(result, null, 4))
})

app.get('/getEpisode/:query', async (req, res) => {

    const result = await scrapper.watchAnime(req.params.query)
    res.header("Content-Type", 'application/json');
    res.send(JSON.stringify(result, null, 4))
})

port = env.PORT || 8080
app.listen(port, () => {
    console.log(`Listening to port ${port}`)
})
