System.register(['angular2/platform/browser', 'angular2/core', './app/contacts-app', 'angular2/router'], function(exports_1) {
    var browser_1, core_1, contacts_app_1, router_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (contacts_app_1_1) {
                contacts_app_1 = contacts_app_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(contacts_app_1.ContactsApp, [
                core_1.provide(router_1.LocationStrategy, { useClass: router_1.HashLocationStrategy })
            ]);
        }
    }
});
//# sourceMappingURL=/Users/kashyapmukkamala/WebstormProjects/angular2-master-class-starter/src/client/app.js.map