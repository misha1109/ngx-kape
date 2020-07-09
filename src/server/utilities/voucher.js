import getConfig from '../utilities/configLoader'

export function checkIfVoucher (voucher) {
  // Check if voucher valid
  const config = getConfig('vouchers');
  if ( config[voucher] ) {
    return config[voucher]['discount']
  } else {
    return 1;
  }
}

export function applyVoucher( discount, offers ) {
  // Applying the voucher discount for all offers
  return offers.map( offer => {
    const newOffer = {
      ...offer,
      price:offer.price * discount
    };
    return newOffer;
  });
}
