import {Provider} from './provider/provider';
import {ClassProvider} from './provider/class-provider';
import {ValueProvider} from './provider/value-provider';
import {reflection} from './reflection';

export const injector = new class {

    private readonly registry = new Map<any, Provider>();

    private readonly container = new Map<any, any>();

    resolve<T = any>(token: any): T {
        const provider = this.registry.get(token);

        if (!provider) {
            throw new Error(`Missing provider for: "${token}"`)
        }

        const resolved = this.container.has(token) ? this.container.get(token) : this.resolveProvider(provider);

        this.container.set(token, resolved);

        return resolved;
    }

    register(provider: Provider) {
        this.registry.set(provider.token, provider);

        return this;
    }

    clear() {
        this.container.clear();
        this.registry.clear();
    }

    private resolveProvider(provider: Provider) {
        const classProvider = (provider as ClassProvider<any>).useClass || null

        if (classProvider) {
            const tokens = reflection.resolveTokens(classProvider);

            const dependencies = tokens.map(token => injector.resolve(token));

            return new classProvider(...dependencies);
        }

        return (provider as ValueProvider<any>).useValue;
    }
};
