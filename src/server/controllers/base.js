import {APP_BASE_HREF} from "@angular/common";
export default async function controller(req, res, next, html) {
  try {
    res.render(html, {
      req,
      providers: [
        { provide: APP_BASE_HREF, useValue: req.baseUrl}
      ]
    });
  } catch (e) {
    req.error = e;
    next();
  }
}
