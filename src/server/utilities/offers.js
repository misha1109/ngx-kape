import getConfig from '../utilities/configLoader'
import { checkIfVoucher, applyVoucher } from "./voucher";

export default function( voucher ) {
  let offers = getConfig('offers');
  const discount = checkIfVoucher(voucher);
  offers = applyVoucher( discount ,offers);
  return offers;
}
