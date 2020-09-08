import * as tslib_1 from "tslib";
import { Injectable, Output, EventEmitter } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
let RouterService = class RouterService {
    constructor(router) {
        this.router = router;
        this.pageChanged = new EventEmitter();
        this.router.events.subscribe((event) => {
            if (event instanceof (ActivationEnd)) {
                const e = event;
                this.title = e.snapshot.data['title'];
                this.pageChanged.emit();
            }
        });
    }
    showAddGame() {
        this.changePage('add-game');
    }
    showAdministration() {
        this.changePage('administration');
    }
    showGames() {
        this.changePage('games');
    }
    showGame(id) {
        this.changePage(`games/${id}`);
    }
    showHome() {
        this.changePage('');
    }
    showLeagues() {
        this.changePage('leagues');
    }
    showLeague(id) {
        this.changePage(`leagues/${id}`);
    }
    showSignIn() {
        this.changePage('sign-in');
    }
    changePage(route) {
        this.router.navigate([route]);
        this.pageChanged.emit();
    }
};
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], RouterService.prototype, "pageChanged", void 0);
RouterService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [Router])
], RouterService);
export { RouterService };
//# sourceMappingURL=router.service.js.map