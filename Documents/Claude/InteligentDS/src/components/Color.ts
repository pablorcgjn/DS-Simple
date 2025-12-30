/**
 * Color Component
 * Web Component para mostrar muestras de color con información
 */

export class DSColor extends HTMLElement {
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
    return ['color', 'name', 'size'];
  }

  private render() {
    const color = this.getAttribute('color') || '#000000';
    const name = this.getAttribute('name') || 'Color';
    const size = this.getAttribute('size') || 'md';

    const sizeMap: Record<string, string> = {
      'sm': '60px',
      'md': '100px',
      'lg': '150px',
      'xl': '200px',
    };

    const swatchSize = sizeMap[size] || '100px';

    const template = `
      <style>
        :host {
          display: inline-flex;
          flex-direction: column;
          gap: 0.75rem;
          font-family: system-ui, -apple-system, sans-serif;
        }

        .swatch {
          width: ${swatchSize};
          height: ${swatchSize};
          border-radius: 0.5rem;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12);
          border: 1px solid rgba(0, 0, 0, 0.08);
          transition: transform 0.2s ease;
        }

        .swatch:hover {
          transform: scale(1.05);
        }

        .info {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }

        .name {
          font-size: 0.875rem;
          font-weight: 600;
          color: #000;
        }

        .value {
          font-size: 0.75rem;
          color: #666;
          font-family: 'Monaco', 'Menlo', 'Courier New', monospace;
          cursor: pointer;
        }

        .value:hover {
          color: #0066CC;
        }
      </style>
      <div class="swatch" style="background-color: ${color};" title="${color}"></div>
      <div class="info">
        <div class="name">${name}</div>
        <div class="value" title="Click para copiar">${color.toUpperCase()}</div>
      </div>
    `;

    if (this.shadowRoot) {
      this.shadowRoot.innerHTML = template;
      const valueElement = this.shadowRoot.querySelector('.value');
      if (valueElement) {
        valueElement.addEventListener('click', () => {
          navigator.clipboard.writeText(color);
          valueElement.textContent = 'Copiado!';
          setTimeout(() => {
            valueElement.textContent = color.toUpperCase();
          }, 2000);
        });
      }
    }
  }
}

// Registrar el componente
customElements.define('ds-color', DSColor);
