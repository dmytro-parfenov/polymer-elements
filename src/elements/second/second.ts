import {css, CSSResultArray, customElement, html, LitElement, TemplateResult} from 'lit-element';
import {SecondService} from '../../core/second.service';
import {includeInjections} from '../../di/decorator/include-injections';

@customElement('pe-second')
@includeInjections()
export class Second extends LitElement {

    constructor(private readonly secondService: SecondService) {
        super();
    }

    static get styles(): CSSResultArray {
        return [
            css` :host { display: inline-flex;}`
        ];
    }

    render(): TemplateResult {
        return html`pe-second works!`;
    }

}
