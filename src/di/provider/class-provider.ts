import {Constructor} from '../constructor';

export interface ClassProvider<T> {
    readonly useClass: Constructor<T>;
}
