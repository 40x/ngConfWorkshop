import {Injectable} from 'angular2/core';
import {Contact} from '../models/contact';
import {Http, Headers, Request,Response, RequestMethod, RequestOptions} from 'angular2/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs';
import {CONTACT_DATA} from '../data/contact-data';

@Injectable()
export class ContactsService {


  constructor(private _http: Http) {}

  getContacts(): Observable<Contact[]> {

    var req = this.generateRequest('/\contacts', 'Get');

    return this._http.request(req).map(
      (resp: Response) => {
        return resp.json().items;
      }
    );

  }

  getContactById(id: number): Observable<Contact> {
    var req = this.generateRequest('/\contacts/' + id, 'Get');

    return this._http.request(req).map(
      (resp: Response) => {
        return resp.json().item;
      }
    );
  }

  updateContact(c: Contact): Observable<Contact> {
    let headers = new Headers({'Content-Type': 'application/json;charset=UTF-8'});
    return this._http.put('/api/contacts/' + c.id, JSON.stringify(c), {headers}).map(
      (resp: Response) => {
        return resp.json().item;
      }
    );

  }

  protected generateRequest(url: string, method: string): Request {

    let baseUrl = 'http://localhost:4200/api';

    let options = new RequestOptions({
      method: RequestMethod[method],
      url: baseUrl + url
    });

    return new Request(options);
  }
}
