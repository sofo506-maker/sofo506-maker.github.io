const express = require('express')
const api_helper = require('./API_helper')
const app = express()

// Request to Dear Sky APi and get JSON data
const lat = 37.8267
const long = -122.4233
app.get('/getAPIResponse', (req, res) => {
    api_helper.make_API_call('https://api.darksky.net/forecast/ed8dfc88cfe1fe4260150c1f4ff91f31/' + lat + ',' + long)
    .then(response => {
        res.json(response)
    })
    .catch(error => {
        res.send(error)
    })
})

// check the help page 
app.get('/help', (req, res) => {
    res.send('Welocme to help page')
})

// check about page
app.get('/about' , (req, res) => {
    res.send('Welcome to about page')
})

//
app.get('/weather', (req, res) => {
    if(!req.query.address){
        return res.send('Add address as search')
    }
    res.send({
        forcase: 'Snowing',
        address: 'Denver'
        
    })
})

// app.listen(3000, () => {
//     console.log('Server is up')
// })

module.exports = app