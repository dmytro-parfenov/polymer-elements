import {Constructor} from '../constructor';
import {injector} from '../injector';
import {resolveInjectionTokens} from '../reflection';

export function includeInjections() {
    return <T extends Constructor>(target: T): T => {
        const tokens = resolveInjectionTokens(target);

        const values = tokens.map(token => injector.resolve(token));

        return class extends target {
            constructor(...args: any[]) {
                if (args.length) {
                    super(...args);
                    return;
                }

                super(...values);
            }
        }
    }
}
