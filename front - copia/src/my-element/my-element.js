import { LitElement, html } from 'lit-element';
import stylesCss from './my-elementStyle';
import { Signup } from '../form-sign-in';
import { Signin } from '../form-sign-up';

export class MyElement extends LitElement {

    constructor(){
        super()
        this.saludo = "Eris"
        this.componentesHtml = Styles
    }

    /* variables reactivas */
    static get properties() {
        return{
            saludo:{type: String}
        }
    }

    static get scopedElements() {
      return{
        "sign-in": Signin,
        "sign-up": Signup,
      }
  }

    static get styles(){
        return [stylesCss]
    }
    cambio() {
      this.saludo = "primer componente"
    }

    renderAll() {
      if (this.paramComponent == 1) {
        this.componentesHtml = html `<sign-in></sign-in>`
      } else {
        this.componentesHtml = html `<sign-up></sign-up>`
      }
      // render html`${this.componentesHtml}`
    }

    mostrarComponent() {
      this.renderAll();
    }
  render() {
    return html`
      ${this.componentesHtml}
      ${this.renderAll}</p>
      <button @click = ${(e)=>this.mostrarComponent()}>Registrarse</button>
    `;
  }
}
customElements.define('my-element', MyElement);