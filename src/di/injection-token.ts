import {Constructor} from './constructor';

export type InjectionToken<T = any> = Constructor<T> | string | symbol;
