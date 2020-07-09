import { initBaseCookies } from '../utilities/cookies';
import getOffers from '../utilities/offers';

export default async function controller(req, res, next) {
  try {
    // choosing voucher
    const voucher = req.query['voucher'] || req.cookies['voucher'];
    // calculating offers price if voucher discount exists
    const offers = await getOffers( voucher );
    initBaseCookies(req, res);
    res.status(200).send(offers);
  } catch (e) {
    req.error = e;
    next();
  }
}
