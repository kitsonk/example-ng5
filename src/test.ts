import { getTestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting
} from '@angular/platform-browser-dynamic/testing';
import * as sinonChai from 'sinon-chai';

declare const require: any;

intern.registerPlugin('angular-shim', async () => {
  // First, initialize the Angular testing environment.
  getTestBed().initTestEnvironment(
    BrowserDynamicTestingModule,
    platformBrowserDynamicTesting()
  );

  intern.on('suiteAdd', (suite) => {
    suite['afterEach'] = () => {
      getTestBed().resetTestingModule();
    };
  });

  intern.getPlugin('chai').use(sinonChai);

  // Then we find all the tests.
  const context = require.context('./', true, /\.spec\.ts$/);
  // And load the modules.
  context.keys().map(context);
});
