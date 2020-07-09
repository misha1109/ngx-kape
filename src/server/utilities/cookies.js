import getConfig from '../utilities/configLoader'

export function attachCookies( res, name, value, options ) {
  // attaching the cookies and option
  options = {
    ...options,
    expires: new Date(Date.now() + 100000)
  };
  res.cookie( name, value, options );
}

export function calcCookie(cookie, query, config) {
  // Choosing new value of cookie
  let newValue = cookie;
  if ( newValue ) {
    // Changing only the mutable cookies
    if ( config.mutable ) {
      newValue = query || newValue;
    }
  } else {
    newValue = query || config.default;
  }
  return newValue
}

export function initBaseCookies( req, res ) {
  // Updating the cookies according to the task flow
  const config = getConfig('cookies');
  Object.keys( config ).forEach( key => {
    const newCookies = calcCookie(req.cookies[key], req.query[key], config[key])
    attachCookies( res, key, newCookies);
  })
}
