import { LitElement, html, css } from 'lit-element';

export class SubscriptionGrid extends LitElement {
    static get styles() {
        return css`
     

.card {
    margin: 8px;
    outline: none;
    border-radius: 4px;
    color: #fff;
    box-shadow: var(--shadow);
    overflow: hidden;
    transition: all 0.1s ease-out;
    background-color: #334469;
    display: flex;
    flex-direction: row;
}

.card .card-logo {
    flex: 0 0 48px;
    padding: 16px;
    vertical-align: middle;
    display: flex;
}

.card .card-logo img {
    filter: invert(1);
    flex: 1;
    align-self: center;
}

.card .card-content {
    flex: 1;
    padding: 8px 16px;
}

.card-price {
    float: right;
}


.card-content .card-title {
    font-size: 1.7em;
    font-weight: bold;
}

.card-content .card-subtitle {
    margin-top: 4px;
    font-style: italic;
}

.grid {
    display: grid;
    grid-template-columns: auto auto auto;
    grid-gap: 16px 12px;
    padding: 16px;
}

.grid::after {
    /* content: ""; */
    flex: auto;
}

.grid .grid-item {margin: 0;}   `
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