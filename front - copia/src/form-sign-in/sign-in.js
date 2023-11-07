import { LitElement, html } from 'lit-element';
import stylesCss from './sign-inStyle';

export class SignIn extends LitElement {

    static get styles(){
        return [stylesCss]
    }

    render() {
    return html`    
    <div class="iniciar-sesion">
    <p>Iniciar Sesion</p>
        <div class="formulario" >
            <form class="contenedor">
                <label for="correo">Correo electrónico:</label>
                <input class="input" type="email" id="correo" placeholder="example@gmail.com"/>
                <label for="contraseña">Contraseña:</label>
                <input class="input" type="password" id="contraseña"/>
            </form>
        </div>
    </div>
    `;
  }
}
customElements.define('sign-in', SignIn);