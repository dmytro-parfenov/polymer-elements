import {Type} from './type';
import {ParameterInjection} from './parameter-injection';

export const reflection = new class {
    private readonly parameterInjectionsKey = 'custom:parameter-injections';

    resolveTokens(target: Type<any>): any[] {
        const tokens: any[] = Reflect.getMetadata('design:paramtypes', target) || [];

        const parameterInjections = this.resolveParameterInjections(target);

        parameterInjections.forEach(injection => (tokens[injection.index] = injection.token));

        return tokens;
    }

    resolveParameterInjections(target: Type<any>): ParameterInjection[] {
        return Reflect.getMetadata(this.parameterInjectionsKey, target) || [];
    }

    defineParameterInjections(injections: ParameterInjection[], target: Type<any>): void {
        Reflect.defineMetadata(this.parameterInjectionsKey, injections, target);
    }
}


