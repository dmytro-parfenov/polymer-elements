import {Type} from './type';
import {Injection} from './injection';

export const reflection = new class {
    private readonly injectionMetadataKey = 'custom:injections';

    resolveTokens(target: Type<any>): any[] {
        const tokens: any[] = Reflect.getMetadata('design:paramtypes', target) || [];

        const injections = this.resolveInjections(target);

        injections.forEach(injection => (tokens[injection.parameterIndex] = injection.token));

        return tokens;
    }

    resolveInjections(target: Type<any>): Injection[] {
        return Reflect.getMetadata(this.injectionMetadataKey, target) || [];
    }

    defineInjections(injections: Injection[], target: Type<any>): void {
        Reflect.defineMetadata(this.injectionMetadataKey, injections, target);
    }
}


