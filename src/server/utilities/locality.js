const https = require('https');

function getIp(req) {
  // Fake ip because of localhost
  // return '79.177.210.223';
  // Get the users ip address
  return req.headers['x-forwarded-for'] || req.connection.remoteAddress;
}

function getBrowser( req ) {
  // Get browser meta data
  return {
    name: req.useragent.browser,
    version: req.useragent.version,
    mobile: req.useragent.isMobile
  }
}

function getLocation(req) {
  return new Promise(( resolve, reject ) => {
    https.get(`https://json.geoiplookup.io/${getIp(req)}`, function (resp) {
      let body = '';
      resp.on('data', function (data) {
        body += data
      });
      resp.on('end', function () {
        resolve(JSON.parse(body).country_name);
      })
    })
  })
}

export default async function initLocality (req) {
  return {
    ip: getIp(req),
    browser: getBrowser(req),
    // location: 'unavailable',
    secure: false,
    location: await getLocation(req)
  }
}

