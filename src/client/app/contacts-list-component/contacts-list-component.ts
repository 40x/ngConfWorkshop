import {Component, OnInit} from 'angular2/core';
import {Contact} from '../models/contact';
import {Observable} from  'rxjs/Observable';
import {CORE_DIRECTIVES} from 'angular2/common';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {ContactsService} from '../contacts-service/contacts-service';


@Component({
  selector: 'contacts-list-component',
  templateUrl: 'app/contacts-list-component/contacts-list-component.html',
  styleUrls: ['app/contacts-list-component/contacts-list-component.css'],
  directives: [CORE_DIRECTIVES, ROUTER_DIRECTIVES]
})
export class ContactsListComponent implements OnInit {

  contacts: Observable<Array<Contact>>;

  constructor(private _service : ContactsService) {

  }

  getContacts(): void {
    this.contacts = this._service.getContacts();
  }

  ngOnInit() {
    this.getContacts();
  }

}
