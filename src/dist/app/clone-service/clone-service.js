System.register(['angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var CloneService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            CloneService = (function () {
                function CloneService() {
                }
                CloneService.prototype.createClone = function (item) {
                    this.originalItem = item;
                    this.currentItem = this.clone(item);
                    return this.currentItem;
                };
                CloneService.prototype.getItem = function () {
                    return this.currentItem;
                };
                CloneService.prototype.abortChanges = function () {
                    Object.assign(this.currentItem, this.originalItem);
                    return this.originalItem;
                };
                CloneService.prototype.commitChanges = function () {
                    Object.assign(this.originalItem, this.currentItem);
                };
                CloneService.prototype.clone = function (item) {
                    // super poor clone implementation
                    return JSON.parse(JSON.stringify(item));
                };
                CloneService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], CloneService);
                return CloneService;
            })();
            exports_1("CloneService", CloneService);
        }
    }
});
//# sourceMappingURL=/Users/kashyapmukkamala/WebstormProjects/angular2-master-class-starter/src/client/app/clone-service/clone-service.js.map