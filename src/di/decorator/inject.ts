import {Type} from '../type';
import {reflection} from '../reflection';

export function inject(token: any) {
    return (target: Type<any>, _propertyKey: any, parameterIndex: number): void => {
        const injections = reflection.resolveInjections(target);

        const injection = {
            token,
            parameterIndex
        }

        reflection.defineInjections([injection].concat(injections), target);
    }
}
