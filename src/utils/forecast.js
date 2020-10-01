const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=80b653bbb1b37535207975f93fa1402d&query=' + latitude + ',' + longitude + '&units=f'
    request({ url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to weather services!', undefined)
        } else if (response.body.error) {
            callback('Unable to find location', undefined)
        }
        else {
            callback(undefined, {
                temperature: response.body.current.temperature
            })
        }
    })
}

module.exports = forecast