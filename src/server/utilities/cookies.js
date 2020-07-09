import getConfig from '../utilities/configLoader'

export function attachCookies( res, name, value, options ) {
  options = {
    ...options,
    expires: new Date(Date.now() + 100000)
  };
  res.cookie( name, value, options );
}


export function initBaseCookies( req, res ) {
  const config = getConfig('cookies');
  Object.keys( config ).forEach( key => {
    let newValue;
    if ( req.cookies[key] ) {
      newValue = req.cookies[key];
      if ( config[key].mutable ) {
        newValue = req.query[key] || newValue;
      }
    } else {
      newValue = req.query[key] || config[key].default;
    }
    attachCookies( res, key, newValue);
  })
}
