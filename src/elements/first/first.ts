import {css, CSSResultArray, customElement, html, LitElement, TemplateResult} from 'lit-element';
import {FirstService} from '../../core/first.service';
import {injectDependencies} from '../../di/decorator/inject-dependencies';

@customElement('pe-first')
@injectDependencies()
export class First extends LitElement {

    constructor(private readonly firstService: FirstService) {
        super();
    }

    static get styles(): CSSResultArray {
        return [
            css` :host { display: inline-flex;}`
        ];
    }

    render(): TemplateResult {
        return html`pe-first works!`;
    }

}
