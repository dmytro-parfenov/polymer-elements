import {InjectionToken} from '../injection-token';
import {defineInjections, resolveInjections} from '../reflection';
import {Constructor} from '../constructor';

export function inject(token: InjectionToken) {
    return (target: Constructor, _propertyKey: any, parameterIndex: number): void => {
        const injections = resolveInjections(target);

        const injection = {
            token,
            parameterIndex
        }

        defineInjections([injection].concat(injections), target);
    }
}
