import {injector} from '../injector';
import {Type} from '../type';

export function injectable() {
    return <T extends Type<any>>(target: T): T => {
        injector.register({
            token: target,
            useClass: target
        });
        
        return target;
    };
}
