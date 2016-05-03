import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteParams, Router} from 'angular2/router';
import {ContactsService} from "../contacts-service/contacts-service";
import {CloneService} from "../clone-service/clone-service";
import {Contact} from "../models/contact";


@Component({
  selector: 'contact-editor-component',
  templateUrl: 'app//contact-editor-component/contact-editor-component.html',
  styleUrls: ['app//contact-editor-component/contact-editor-component.css'],
  providers: [],
  directives: [],
  pipes: []
})
export class ContactEditorComponent {
  contact: Contact;

  constructor(private _routeParams: RouteParams, private _service: ContactsService,
              private _clone: CloneService<Contact>, private _router: Router) {}

  ngOnInit() {
    this._service.getContactById(parseInt(this._routeParams.get('id'), 10))
      .subscribe(
        (contact) => {
          this.contact = this._clone.createClone(contact);
        }
      );
  }

  cancel() {
    this.contact = this._clone.abortChanges();
  }

  save() {
    this._clone.commitChanges();
    this._service.updateContact(this.contact).subscribe(
      (contact) => {
        this.contact = contact;
        this._router.navigate(['/Contact-Details', {id: this.contact.id}]);
      }
    );
  }

}
