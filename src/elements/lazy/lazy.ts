import {css, CSSResultArray, customElement, html, LitElement, TemplateResult} from 'lit-element';

@customElement('pe-lazy')
export class Lazy extends LitElement {

    constructor() {
        super();

        import('./loadable').then(module => new module.Loadable());
    }

    static get styles(): CSSResultArray {
        return [
            css` :host { display: inline-flex;}`
        ];
    }

    render(): TemplateResult {
        return html`pe-lazy works!`;
    }

}
