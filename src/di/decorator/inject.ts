import {Type} from '../type';
import {reflection} from '../reflection';

export function inject(token: any) {
    return (target: Type<any>, _propertyKey: any, index: number): void => {
        const injections = reflection.resolveParameterInjections(target);

        const injection = {
            token,
            index
        }

        reflection.defineParameterInjections([injection].concat(injections), target);
    }
}
