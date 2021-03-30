import {ClassProvider} from './class-provider';
import {ValueProvider} from './value-provider';

export type Provider<T = any> = ClassProvider<T> | ValueProvider<T>;
