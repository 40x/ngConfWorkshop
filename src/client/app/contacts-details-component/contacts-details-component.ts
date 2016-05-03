import {Component, OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteParams} from 'angular2/router';
import {ContactsService} from "../contacts-service/contacts-service";
import {Contact} from "../models/contact";


@Component({
  selector: 'contacts-details-component',
  templateUrl: 'app/contacts-details-component/contacts-details-component.html',
  styleUrls: ['app/contacts-details-component/contacts-details-component.css'],
  directives: [ROUTER_DIRECTIVES]
})
export class ContactsDetailsComponent implements OnInit {
  contact: Contact;

  constructor(private _routeParams: RouteParams, private _service: ContactsService) {}

  ngOnInit() {
      this._service.getContactById(parseInt(this._routeParams.get('id'), 10))
            .subscribe(
              (contact) => {
                this.contact = contact;
              }
            );
  }
}
