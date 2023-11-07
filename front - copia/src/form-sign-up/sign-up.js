import { LitElement, html } from 'lit-element';
import stylesCss from './sign-upStyle';

export class SignUp extends LitElement {

    static get styles(){
        return [stylesCss]
    }

    render() {
    return html`
    <div class="registrarse">
    <p>Registrarse</p>
        <form class="formulario">
            <label for="nombre">Nombre:</label>
            <input class="input" type="text" id="nombre"/>
            <label for="correo">Correo electrónico:</label>
            <input class="input" type="email" id="correo" placeholder="example@gmail.com"/>
            <label for="contraseña">Contraseña:</label>
            <input class="input" type="password" id="contraseña"/>
        </form>
    </div>
    `;
  }
}
customElements.define('sign-up', SignUp);