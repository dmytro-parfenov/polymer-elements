import {customElement, html, LitElement, property, TemplateResult} from 'lit-element';

@customElement('pe-img')
export class Image extends LitElement {

    @property({type: String})
    src = './assets/images/150.png';

    @property({type: String})
    name = 'image'

    render(): TemplateResult {
        return html`<img src="${this.src}" alt="${this.name}">`;
    }

}
