import {injector} from '../injector';
import {Constructor} from '../constructor';

export function injectable() {
    return <T extends Constructor>(target: T): T => {
        injector.register({
            token: target,
            provider: { useClass: target }
        });
        
        return target;
    };
}
