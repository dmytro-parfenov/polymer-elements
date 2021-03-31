import {css, CSSResultArray, customElement, html, LitElement, TemplateResult} from 'lit-element';
import {FirstService} from '../../core/first.service';
import {includeInjections} from '../../di/decorator/include-injections';

@customElement('pe-first')
@includeInjections()
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
