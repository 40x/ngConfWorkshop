System.register(['angular2/core', './contact-header-component/contact-header-component', './contacts-service/contacts-service', './clone-service/clone-service', 'angular2/router', './contacts-list-component/contacts-list-component', './contacts-details-component/contacts-details-component', './contact-editor-component/contact-editor-component', 'angular2/http'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, contact_header_component_1, contacts_service_1, clone_service_1, router_1, contacts_list_component_1, contacts_details_component_1, contact_editor_component_1, http_1;
    var ContactsApp;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (contact_header_component_1_1) {
                contact_header_component_1 = contact_header_component_1_1;
            },
            function (contacts_service_1_1) {
                contacts_service_1 = contacts_service_1_1;
            },
            function (clone_service_1_1) {
                clone_service_1 = clone_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (contacts_list_component_1_1) {
                contacts_list_component_1 = contacts_list_component_1_1;
            },
            function (contacts_details_component_1_1) {
                contacts_details_component_1 = contacts_details_component_1_1;
            },
            function (contact_editor_component_1_1) {
                contact_editor_component_1 = contact_editor_component_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            ContactsApp = (function () {
                function ContactsApp() {
                }
                ContactsApp = __decorate([
                    core_1.Component({
                        selector: 'contacts-app',
                        template: "\n      <contact-header-component></contact-header-component>\n      <router-outlet></router-outlet>\n  ",
                        directives: [contact_header_component_1.ContactHeaderComponent, contacts_list_component_1.ContactsListComponent, router_1.ROUTER_DIRECTIVES],
                        styleUrls: ['app/contacts-app.css'],
                        providers: [contacts_service_1.ContactsService, router_1.ROUTER_PROVIDERS, clone_service_1.CloneService, http_1.HTTP_PROVIDERS]
                    }),
                    router_1.RouteConfig([
                        {
                            path: '/contacts',
                            component: contacts_list_component_1.ContactsListComponent,
                            name: 'Contacts-List',
                            useAsDefault: true
                        },
                        {
                            path: '/contact/:id',
                            component: contacts_details_component_1.ContactsDetailsComponent,
                            name: 'Contact-Details'
                        },
                        {
                            path: '/contact/:id/edit',
                            component: contact_editor_component_1.ContactEditorComponent,
                            name: 'Contact-Edit'
                        }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], ContactsApp);
                return ContactsApp;
            })();
            exports_1("ContactsApp", ContactsApp);
        }
    }
});
//# sourceMappingURL=/Users/kashyapmukkamala/WebstormProjects/angular2-master-class-starter/src/client/app/contacts-app.js.map