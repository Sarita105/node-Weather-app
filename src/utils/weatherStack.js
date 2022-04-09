const request = require('request');

const forecast = (lat, long, cb) => {
    const url = 'http://api.weatherstack.com/current?access_key=245674363615e86048e52bf9c0565caa&query='+lat+','+long+'&unit=f';

    request({url, json: true}, (error, {body}) => {
            if(error) {
                cb('unable to connect to server');
            } else if(body.error) {
                cb('provide valid parameter')
            } else{
                const data = body.current;
                cb(undefined, {
                    loc: body.location,
                    desc: data,
                    weather_descriptions: data.weather_descriptions[0],
                    tempurature_out: data.temperature,
                    feelslike: data.feelslike
                });
            }
        })

}
module.exports = forecast;