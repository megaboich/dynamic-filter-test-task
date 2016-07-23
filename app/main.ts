import 'es6-shim'
import 'reflect-metadata'
require('zone.js')

import { bootstrap } from '@angular/platform-browser-dynamic';
import { disableDeprecatedForms, provideForms } from '@angular/forms';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { AppComponent } from './app.component';

import { APP_ROUTER_PROVIDERS } from './app.routes'

import { ConfirmationService } from './shared/interaction/confirmation.service'

import { enableProdMode } from '@angular/core';

//enableProdMode();

bootstrap(AppComponent, [
    disableDeprecatedForms(),
    provideForms(),
    ConfirmationService,
    APP_ROUTER_PROVIDERS,
    { provide: LocationStrategy, useClass: HashLocationStrategy }
]);
