import initLocality from "../utilities/locality";

export default async function controller(req, res, next) {
  // Finding the locality data of the browser
  try {
    const locality = await initLocality(req);
    res.status(200).send(locality);
  } catch (e) {
    req.error = e;
    next();
  }
}
