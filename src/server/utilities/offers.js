import getConfig from '../utilities/configLoader'
import { checkIfVoucher, applyVoucher } from "./voucher";

export default function( voucher ) {
  // Loading the the offers and applying voucher discount if voucher found
  let offers = getConfig('offers');
  const discount = checkIfVoucher(voucher);
  offers = applyVoucher( discount ,offers);
  return offers;
}
