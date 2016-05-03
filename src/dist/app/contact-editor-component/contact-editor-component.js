System.register(['angular2/core', 'angular2/router', "../contacts-service/contacts-service", "../clone-service/clone-service"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, contacts_service_1, clone_service_1;
    var ContactEditorComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (contacts_service_1_1) {
                contacts_service_1 = contacts_service_1_1;
            },
            function (clone_service_1_1) {
                clone_service_1 = clone_service_1_1;
            }],
        execute: function() {
            ContactEditorComponent = (function () {
                function ContactEditorComponent(_routeParams, _service, _clone, _router) {
                    this._routeParams = _routeParams;
                    this._service = _service;
                    this._clone = _clone;
                    this._router = _router;
                }
                ContactEditorComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._service.getContactById(parseInt(this._routeParams.get('id'), 10))
                        .subscribe(function (contact) {
                        _this.contact = _this._clone.createClone(contact);
                    });
                };
                ContactEditorComponent.prototype.cancel = function () {
                    this.contact = this._clone.abortChanges();
                };
                ContactEditorComponent.prototype.save = function () {
                    var _this = this;
                    this._clone.commitChanges();
                    this._service.updateContact(this.contact).subscribe(function (contact) {
                        _this.contact = contact;
                        _this._router.navigate(['/Contact-Details', { id: _this.contact.id }]);
                    });
                };
                ContactEditorComponent = __decorate([
                    core_1.Component({
                        selector: 'contact-editor-component',
                        templateUrl: 'app//contact-editor-component/contact-editor-component.html',
                        styleUrls: ['app//contact-editor-component/contact-editor-component.css'],
                        providers: [],
                        directives: [],
                        pipes: []
                    }), 
                    __metadata('design:paramtypes', [router_1.RouteParams, contacts_service_1.ContactsService, clone_service_1.CloneService, router_1.Router])
                ], ContactEditorComponent);
                return ContactEditorComponent;
            })();
            exports_1("ContactEditorComponent", ContactEditorComponent);
        }
    }
});
//# sourceMappingURL=/Users/kashyapmukkamala/WebstormProjects/angular2-master-class-starter/src/client/app/contact-editor-component/contact-editor-component.js.map