const PORT = 9000
const axios = require('axios')
const cheerio = require('cheerio')
const { response } = require('express')
const express = require('express')
const app = express()
const pretty = require('pretty');

const url = 'https://www.amazon.in/'

app.get('/', function (req, res) {
    res.json('This is my webscraper')
})

app.get('/results', (req, res) => {

    axios(url)

        .then(response => {
            const item = []
            const html = response.data
            const $ = cheerio.load(html)
            //console.log(pretty($.html()));
            //console.log($('.nav-progressive-content').text());
            item.push($('.a-size-small').text())
            res.send({ items: item });
        }).catch(err => console.log(err))



})



app.listen(PORT, () => console.log(`server running on `, 'http://localhost:9000'))