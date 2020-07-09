import { initBaseCookies } from '../utilities/cookies';
import getOffers from '../utilities/offers';

export default async function controller(req, res, next) {
  try {
    const offers = await getOffers( req.query['voucher'] );
    initBaseCookies(req, res);
    res.status(200).send(offers);
  } catch (e) {
    req.error = e;
    next();
  }
}
