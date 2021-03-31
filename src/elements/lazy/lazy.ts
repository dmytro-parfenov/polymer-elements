import {css, CSSResultArray, customElement, html, LitElement, TemplateResult} from 'lit-element';

@customElement('pe-lazy')
export class Lazy extends LitElement {

    static get styles(): CSSResultArray {
        return [
            css` :host { display: inline-flex;}`
        ];
    }

    render(): TemplateResult {
        return html`pe-lazy works!`;
    }

    connectedCallback(): void {
        super.connectedCallback()

        console.log('pe-lazy is added to the document’s DOM');

        import('./loadable').then(module => new module.Loadable());
    }

}
