import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
let HttpService = class HttpService {
    constructor(_http) {
        this._http = _http;
    }
    get(url) {
        return this._http.get(url).pipe(catchError((err) => {
            return this.handleError(url, null)(err);
        }));
    }
    post(url, payload) {
        return this._http.post(url, payload).pipe(catchError((err) => {
            return this.handleError(url, null)(err);
        }));
    }
    handleError(operation = 'operation', result) {
        return (error) => {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // Let the app keep running by returning an empty result.
            return of(result);
        };
    }
};
HttpService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [HttpClient])
], HttpService);
export { HttpService };
//# sourceMappingURL=http.service.js.map