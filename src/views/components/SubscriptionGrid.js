import { LitElement, html, css } from 'lit-element';

export class SubscriptionGrid extends LitElement {
    static get styles() {
        return css`
        .grid {
            display: grid;
            grid-template-columns: auto auto auto;
            grid-gap: 16px 12px;
            padding: 16px;
        }

        .grid::after {
            flex: auto;
        }

        .grid .grid-item {margin: 0;}
        `
    }

    static get properties() {
        return {
            items: { type: Array }
        };
    }

    render() {
        return html`
            <ul id="items-grid" class="grid">
                ${this.items.map(e => html`
                    ${this.subscriptionItemTemplate(e.name, e.description, e.icon, e.color, e.price)}
                `)}
            </ul>
        `;
    }

    subscriptionItemTemplate(name, description, icon, color, price) {
        return html`
            <li class="card grid-item">
                <div class="card-logo" .style="background-color:${color}">
                    <img height="48" width="48" src="${icon}" />
                </div>
                <div class="card-content">
                    <div class="card-title">${name}</div>
                    <div class="card-subtitle">${description}</div>
                    <div class="card-price">${price}</div>
                </div>
            </li>
        `;
    }
}
customElements.define('st-subscription-grid', SubscriptionGrid);