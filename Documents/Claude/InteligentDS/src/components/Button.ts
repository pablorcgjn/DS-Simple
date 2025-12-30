/**
 * Button Component
 * Web Component para un botón reutilizable y accesible
 */

export class DSButton extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
    this.setupEventListeners();
  }

  attributeChangedCallback() {
    this.render();
  }

  static get observedAttributes() {
    return ['variant', 'size', 'disabled', 'type'];
  }

  private getVariantStyles(): string {
    const variant = this.getAttribute('variant') || 'primary';
    const variantMap: Record<string, string> = {
      'primary': `
        background-color: var(--ds-color-primary, #0066CC);
        color: white;
      `,
      'secondary': `
        background-color: var(--ds-color-secondary, #f5f5f5);
        color: #333;
        border: 1px solid #ddd;
      `,
      'danger': `
        background-color: var(--ds-color-danger, #d32f2f);
        color: white;
      `,
      'ghost': `
        background-color: transparent;
        color: var(--ds-color-primary, #0066CC);
        border: 1px solid var(--ds-color-primary, #0066CC);
      `,
    };

    return variantMap[variant] || variantMap['primary'];
  }

  private getSizeStyles(): string {
    const size = this.getAttribute('size') || 'md';
    const sizeMap: Record<string, string> = {
      'sm': `
        padding: 0.375rem 0.75rem;
        font-size: 0.875rem;
      `,
      'md': `
        padding: 0.625rem 1rem;
        font-size: 1rem;
      `,
      'lg': `
        padding: 0.875rem 1.5rem;
        font-size: 1.125rem;
      `,
    };

    return sizeMap[size] || sizeMap['md'];
  }

  private render() {
    const isDisabled = this.hasAttribute('disabled');
    const type = this.getAttribute('type') || 'button';

    const variantStyles = this.getVariantStyles();
    const sizeStyles = this.getSizeStyles();

    const template = `
      <style>
        :host {
          display: inline-block;
          font-family: system-ui, -apple-system, sans-serif;
        }

        :host([hidden]) {
          display: none;
        }

        button {
          ${variantStyles}
          ${sizeStyles}
          border: none;
          border-radius: 0.375rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s ease;
          outline: none;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        button:hover:not(:disabled) {
          filter: brightness(0.9);
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }

        button:active:not(:disabled) {
          transform: translateY(0);
        }

        button:focus-visible {
          outline: 2px solid #0066CC;
          outline-offset: 2px;
        }

        button:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
      </style>
      <button type="${type}" ${isDisabled ? 'disabled' : ''}>
        <slot></slot>
      </button>
    `;

    if (this.shadowRoot) {
      this.shadowRoot.innerHTML = template;
    }
  }

  private setupEventListeners() {
    const button = this.shadowRoot?.querySelector('button');
    if (button) {
      button.addEventListener('click', (e) => {
        this.dispatchEvent(new CustomEvent('click', { bubbles: true, composed: true }));
      });
    }
  }
}

// Registrar el componente
customElements.define('ds-button', DSButton);
