import {Component} from 'angular2/core';
import {ContactHeaderComponent} from './contact-header-component/contact-header-component'
import {Contact} from './models/contact';
import {ContactsService} from './contacts-service/contacts-service';
import {CloneService} from './clone-service/clone-service';
import {ROUTER_DIRECTIVES, ROUTER_PROVIDERS , RouteConfig } from 'angular2/router';
import {ContactsListComponent} from './contacts-list-component/contacts-list-component';
import {ContactsDetailsComponent} from './contacts-details-component/contacts-details-component';
import {ContactEditorComponent} from './contact-editor-component/contact-editor-component';
import {HTTP_PROVIDERS} from 'angular2/http';

@Component({
  selector: 'contacts-app',
  template: `
      <contact-header-component></contact-header-component>
      <router-outlet></router-outlet>
  `,
  directives: [ContactHeaderComponent, ContactsListComponent, ROUTER_DIRECTIVES],
  styleUrls: ['app/contacts-app.css'],
  providers: [ContactsService, ROUTER_PROVIDERS, CloneService, HTTP_PROVIDERS]
})
@RouteConfig([
  {
    path: '/contacts',
    component: ContactsListComponent,
    name: 'Contacts-List',
    useAsDefault: true
  },
  {
    path: '/contact/:id',
    component: ContactsDetailsComponent,
    name: 'Contact-Details'
  },
  {
    path: '/contact/:id/edit',
    component: ContactEditorComponent,
    name: 'Contact-Edit'
  }
])
export class ContactsApp {

}
