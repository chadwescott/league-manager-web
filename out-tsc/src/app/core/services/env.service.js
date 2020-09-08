import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
let EnvService = class EnvService {
    constructor() {
        // The values that are defined here are the default values that can
        // be overridden by env.js
        // API url
        this.apiUrl = '';
        this.applicationName = 'League Manager';
        // Whether or not to enable debug mode
        this.enableDebug = true;
    }
};
EnvService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [])
], EnvService);
export { EnvService };
//# sourceMappingURL=env.service.js.map