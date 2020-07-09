const ipLocation = require("iplocation");

function getIp(req) {
  return req.headers['x-forwarded-for'] || req.connection.remoteAddress;
}

function getBrowser( req ) {
  return {
    name: req.useragent.browser,
    version: req.useragent.version,
    mobile: req.useragent.isMobile
  }
}

function getLocation(req) {
  return ipLocation(getIp(req));
}

export default async function initLocality (req) {
  return {
    ip: getIp(req),
    browser: getBrowser(req),
    location: 'unavailable',
    secure: false
    // location: await getLocation(req)
  }
}

