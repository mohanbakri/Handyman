var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { IonicPage, NavController, ViewController, NavParams } from 'ionic-angular';
var Location = /** @class */ (function () {
    function Location(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
    }
    Location.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Location');
    };
    Location.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    Location = __decorate([
        IonicPage(),
        Component({
            selector: 'page-location',
            templateUrl: 'location.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams, ViewController])
    ], Location);
    return Location;
}());
export { Location };
//# sourceMappingURL=location.js.map