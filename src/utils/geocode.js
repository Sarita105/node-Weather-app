const request = require('request');
const geocode = (address, cb) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+encodeURIComponent(address)+'.json?access_token=pk.eyJ1Ijoic2FyaXRhMjYyNSIsImEiOiJjbDE3Y3ptZTgwNzg3M2RsaTE1eWk4dnBnIn0.nBglx5FsyWBUGV71opUH4Q&limit=1';
    
    request({url, json: true}, (error, {body}) => {
    if(error) {
                cb('unable to connect to server');
            } else if(body.features.length === 0) {
                cb('provide valid parameter')
            } else{
            const data = body.features[0].center;
            cb(undefined,{
                lat:data[1],
                long:data[0],
                location:body.features[0].place_name,
            })
            }
        })
    
    
    }

module.exports = geocode;