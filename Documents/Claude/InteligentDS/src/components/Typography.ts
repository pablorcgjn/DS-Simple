/**
 * Typography Component
 * Web Component para renderizar texto con estilos de tipografía del sistema de diseño
 */

export class DSTypography extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback() {
    this.render();
  }

  static get observedAttributes() {
    return ['variant', 'color', 'weight'];
  }

  private getVariantClass(): string {
    const variant = this.getAttribute('variant') || 'body-base';
    const variantMap: Record<string, string> = {
      'title-hero': 'ds-title-hero',
      'title-page': 'ds-title-page',
      'subtitle': 'ds-subtitle',
      'heading': 'ds-heading',
      'subheading': 'ds-subheading',
      'body-base': 'ds-body-base',
      'body-small': 'ds-body-small',
      'body-strong': 'ds-body-strong',
      'body-emphasis': 'ds-body-emphasis',
      'body-link': 'ds-body-link',
      'body-code': 'ds-body-code',
      'input': 'ds-input',
    };
    return variantMap[variant] || 'ds-body-base';
  }

  private render() {
    const variant = this.getAttribute('variant') || 'body-base';
    const color = this.getAttribute('color') || 'inherit';
    const weight = this.getAttribute('weight') || 'normal';

    const variantClass = this.getVariantClass();
    const slot = this.innerHTML;

    const template = `
      <style>
        :host {
          display: block;
          color: ${color};
          font-weight: ${weight};
        }

        /* Typography tokens */
        .ds-title-hero {
          font-size: 3.6rem;
          font-weight: 700;
          line-height: 1.2;
          letter-spacing: -0.02em;
        }

        .ds-title-page {
          font-size: 2.8rem;
          font-weight: 700;
          line-height: 1.3;
          letter-spacing: -0.01em;
        }

        .ds-subtitle {
          font-size: 1.5rem;
          font-weight: 600;
          line-height: 1.4;
        }

        .ds-heading {
          font-size: 1.25rem;
          font-weight: 700;
          line-height: 1.4;
        }

        .ds-subheading {
          font-size: 1.125rem;
          font-weight: 600;
          line-height: 1.4;
        }

        .ds-body-base {
          font-size: 1rem;
          font-weight: 400;
          line-height: 1.5;
        }

        .ds-body-small {
          font-size: 0.875rem;
          font-weight: 400;
          line-height: 1.5;
        }

        .ds-body-strong {
          font-weight: 700;
        }

        .ds-body-emphasis {
          font-style: italic;
        }

        .ds-body-link {
          color: var(--ds-color-primary, #0066CC);
          text-decoration: underline;
          cursor: pointer;
        }

        .ds-body-code {
          font-family: 'Monaco', 'Menlo', 'Courier New', monospace;
          font-size: 0.875rem;
          background-color: var(--ds-color-background-secondary, #f5f5f5);
          padding: 0.2em 0.4em;
          border-radius: 0.25rem;
        }

        .ds-input {
          font-size: 1rem;
          font-weight: 400;
          line-height: 1.5;
        }

        ::slotted(*) {
          margin: 0;
        }
      </style>
      <slot></slot>
    `;

    if (this.shadowRoot) {
      this.shadowRoot.innerHTML = template;
      const slot = this.shadowRoot.querySelector('slot');
      if (slot) {
        slot.setAttribute('class', variantClass);
      }
    }
  }
}

// Registrar el componente
customElements.define('ds-typography', DSTypography);
