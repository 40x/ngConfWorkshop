import {bootstrap} from 'angular2/platform/browser';
import {provide} from 'angular2/core';
import {ContactsApp} from './app/contacts-app';
import {HashLocationStrategy, LocationStrategy, ROUTER_PROVIDERS} from 'angular2/router';


bootstrap(ContactsApp, [
  ROUTER_PROVIDERS,
  provide(LocationStrategy, {useClass: HashLocationStrategy})
]);
