import {BaseProvider} from './base-provider';

export interface ValueProvider<T = any> extends BaseProvider {
    readonly useValue: T;
}
