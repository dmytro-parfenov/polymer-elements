import {css, CSSResultArray, customElement, html, LitElement, TemplateResult} from 'lit-element';

@customElement('pe-first')
export class First extends LitElement {

    static get styles(): CSSResultArray {
        return [
            css` :host { display: inline-flex;}`
        ];
    }

    render(): TemplateResult {
        return html`pe-first works!`;
    }

}
