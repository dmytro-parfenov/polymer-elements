import {InjectionToken} from './injection-token';
import {Constructor} from './constructor';
import {Injection} from './injection';

export const INJECTION_METADATA_KEY = 'custom:injections';

export function resolveInjectionTokens<T>(target: Constructor<T>): InjectionToken[] {
    const tokens: InjectionToken[] = Reflect.getMetadata('design:paramtypes', target) || [];

    const injections = resolveInjections(target);

    injections.forEach(injection => (tokens[injection.parameterIndex] = injection.token));

    return tokens;
}

export function resolveInjections(target: Constructor): Injection[] {
    return Reflect.getMetadata(INJECTION_METADATA_KEY, target) || [];
}

export function defineInjections(injections: Injection[], target: Constructor): void {
    Reflect.defineMetadata(INJECTION_METADATA_KEY, injections, target);
}


