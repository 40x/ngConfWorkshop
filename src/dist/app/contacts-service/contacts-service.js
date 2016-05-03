System.register(['angular2/core', 'angular2/http', 'rxjs/add/operator/map'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1;
    var ContactsService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {}],
        execute: function() {
            ContactsService = (function () {
                function ContactsService(_http) {
                    this._http = _http;
                }
                ContactsService.prototype.getContacts = function () {
                    var req = this.generateRequest('/\contacts', 'Get');
                    return this._http.request(req).map(function (resp) {
                        return resp.json().items;
                    });
                };
                ContactsService.prototype.getContactById = function (id) {
                    var req = this.generateRequest('/\contacts/' + id, 'Get');
                    return this._http.request(req).map(function (resp) {
                        return resp.json().item;
                    });
                };
                ContactsService.prototype.updateContact = function (c) {
                    var headers = new http_1.Headers({ 'Content-Type': 'application/json;charset=UTF-8' });
                    return this._http.put('/api/contacts/' + c.id, JSON.stringify(c), { headers: headers }).map(function (resp) {
                        return resp.json().item;
                    });
                };
                ContactsService.prototype.generateRequest = function (url, method) {
                    var baseUrl = 'http://localhost:4200/api';
                    var options = new http_1.RequestOptions({
                        method: http_1.RequestMethod[method],
                        url: baseUrl + url
                    });
                    return new http_1.Request(options);
                };
                ContactsService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], ContactsService);
                return ContactsService;
            })();
            exports_1("ContactsService", ContactsService);
        }
    }
});
//# sourceMappingURL=/Users/kashyapmukkamala/WebstormProjects/angular2-master-class-starter/src/client/app/contacts-service/contacts-service.js.map