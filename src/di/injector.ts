import {InjectionToken} from './injection-token';
import {Provider} from './provider/provider';
import {ClassProvider} from './provider/class-provider';
import {ValueProvider} from './provider/value-provider';
import {resolveInjectionTokens} from './reflection';

export const injector = new class {

    private readonly registry = new Map<InjectionToken, Provider>();

    private readonly resolved = new Map<InjectionToken, any>();

    resolve<T>(target: InjectionToken<T>): T {
        const provider = this.registry.get(target);

        if (!provider) {
            throw new Error(`Missing provider for: "${target.toString()}"`)
        }

        const resolved = this.resolved.get(target) || this.resolveProvider(provider);

        this.resolved.set(target, resolved);

        return resolved;
    }

    register<T>({ token, provider }: {token: InjectionToken<T>, provider: Provider<T>}) {
        this.registry.set(token, provider);

        return this;
    }

    clear() {
        this.resolved.clear();
        this.registry.clear();
    }

    private resolveProvider(provider: Provider) {
        const classProvider = (provider as ClassProvider<any>).useClass || null

        if (classProvider) {
            const tokens = resolveInjectionTokens(classProvider);

            const values = tokens.map(token => injector.resolve(token));

            return new classProvider(...values);
        }

        return (provider as ValueProvider<any>).useValue;
    }
};
