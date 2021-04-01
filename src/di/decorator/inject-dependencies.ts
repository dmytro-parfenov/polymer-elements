import {Type} from '../type';
import {injector} from '../injector';
import {reflection} from '../reflection';

export function injectDependencies() {
    return <T extends Type<any>>(target: T): T => {
        const tokens = reflection.resolveTokens(target);

        const dependencies = tokens.map(token => injector.resolve(token));

        return class extends target {
            constructor(...args: any[]) {
                if (args.length) {
                    super(...args);
                    return;
                }

                super(...dependencies);
            }
        }
    }
}
