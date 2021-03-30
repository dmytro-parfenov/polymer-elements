import {InjectionToken} from './injection-token';

export interface Injection<T = any> {
    readonly token: InjectionToken<T>;
    readonly parameterIndex: number;
}
