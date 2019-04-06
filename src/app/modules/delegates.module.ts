import { Observable } from 'rxjs';

export module Delegates {
    export type ICallback = () => void;
    export type IErrorHandler<T> = (error: string) => Observable<T>;
}
