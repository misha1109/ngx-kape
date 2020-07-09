import 'zone.js/dist/zone-node';
const cookieParser = require('cookie-parser')
import { ngExpressEngine } from '@nguniversal/express-engine';
import * as express from 'express';
import { join } from 'path';

import { AppServerModule } from './src/main.server';
import { existsSync } from 'fs';

const useragent = require('express-useragent');
import apiOffersControl from './src/server/controllers/offers.js';
import apiLocalityControl from './src/server/controllers/locality.js';
import baseControl from './src/server/controllers/base.js';
import {APP_BASE_HREF} from '@angular/common';

// The Express app is exported so that it can be used by serverless Functions.
export function app() {
  const server = express();
  const distFolder = join(process.cwd(), 'dist/ng-jade/browser');
  const indexHtml = existsSync(join(distFolder, 'index.original.html')) ? 'index.original.html' : 'index';

  // Our Universal express-engine (found @ https://github.com/angular/universal/tree/master/modules/express-engine)
  server.engine('html', ngExpressEngine({
    bootstrap: AppServerModule,
  }));

  // Adding general middleware and config
  server.use(cookieParser());
  server.use(useragent.express());
  server.set('trust proxy', true);

  // Setting the ssr engine and path for the Angular app
  server.set('view engine', 'html');
  server.set('views', distFolder);


  // Serve static files from /browser
  server.get('*.*', express.static(distFolder, {
    maxAge: '1y'
  }));

  // Endpoint for offers
  server.get('/api/offers', (req, res, next) => {
    apiOffersControl(req, res, next);
  });

  // Endpoint for locality
  server.get('/api/locality', (req, res, next) => {
    apiLocalityControl(req, res, next);
  });

  // All regular routes use the Universal engine
  server.get('*', (req, res, next) => {
    baseControl( req, res, next, indexHtml );
  });

  // Handle Errors...
  server.get('*', (req, res) => {
    res.status(500).send(req['error']);
  });

  return server;
}

function run() {
  const port = process.env.PORT || 4000;

  // Start up the Node server
  const server = app();
  server.listen(port, () => {
    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}

// Webpack will replace 'require' with '__webpack_require__'
// '__non_webpack_require__' is a proxy to Node 'require'
// The below code is to ensure that the server is run only when not requiring the bundle.
declare const __non_webpack_require__: NodeRequire;
const mainModule = __non_webpack_require__.main;
const moduleFilename = mainModule && mainModule.filename || '';
if (moduleFilename === __filename || moduleFilename.includes('iisnode')) {
  run();
}

export * from './src/main.server';
