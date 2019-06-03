import { LitElement, html } from 'lit-element';
import "./views/components/SubscriptionGrid";
import "./views/components/Header";

export class App extends LitElement {

    render() {
        return html`
         <div class="app-wrapper">
    <st-header></st-header>

    <header>
      <h1>Subscrip<span>tonic</span></h1>
    </header>

    <main>
      <section>

        <h3>Your current subscriptions:</h3>
<st-subscription-grid .items="${this.subscriptions}"></st-subscription-grid>
      </section>
    </main>
  </div>
        `;
    }

    static get properties() {
        return {
            subscriptions: { type: Array }
        };
    }

    constructor() {
        super();
        this.subscriptions = [
            { name: 'Netflix', description: 'Ultra', price: '14€/month', color: '#E50914', icon: 'https://unpkg.com/simple-icons@latest/icons/netflix.svg' },
            { name: 'Spotify', description: 'Premium', price: '9,90€/month', color: '#1ED760', icon: 'https://unpkg.com/simple-icons@latest/icons/spotify.svg' },
            { name: 'Medium', description: 'Premium', price: 'Free', color: '#000000', icon: 'https://unpkg.com/simple-icons@latest/icons/medium.svg' },
            { name: 'Spotify', description: 'Premium', price: '9,90€/month', color: '#1ED760', icon: 'https://unpkg.com/simple-icons@latest/icons/spotify.svg' },
        ]
    }
}
customElements.define('st-app', App);