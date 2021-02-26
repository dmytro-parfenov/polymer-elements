import {customElement, html, LitElement, property, TemplateResult} from 'lit-element';

@customElement('pe-button')
export class Button extends LitElement {

    @property({type: Boolean, reflect: true})
    disabled = false;

    render(): TemplateResult {
        return html`<button ?disabled="${this.disabled}"><slot></slot></button>`;
    }

}
