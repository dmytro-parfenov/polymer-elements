import {Type} from '../type';
import {BaseProvider} from './base-provider';

export interface ClassProvider<T = any> extends BaseProvider{
    readonly useClass: Type<T>;
}
