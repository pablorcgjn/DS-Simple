/**
 * Accordion Component
 *
 * Componente principal del accordion que gestiona el estado
 * de los items expandidos/colapsados
 *
 * @example
 * <Accordion allowMultiple={false}>
 *   <AccordionItem title="Item 1">Contenido 1</AccordionItem>
 *   <AccordionItem title="Item 2">Contenido 2</AccordionItem>
 * </Accordion>
 */

export class Accordion {
  constructor(options = {}) {
    this.allowMultiple = options.allowMultiple || false;
    this.defaultExpanded = options.defaultExpanded || [];
    this.expandedItems = new Set(this.defaultExpanded);

    // TODO: Implementar lógica del accordion
  }

  /**
   * Alterna el estado de un item
   * @param {string} itemId - ID del item a alternar
   */
  toggle(itemId) {
    if (this.expandedItems.has(itemId)) {
      this.expandedItems.delete(itemId);
    } else {
      if (!this.allowMultiple) {
        this.expandedItems.clear();
      }
      this.expandedItems.add(itemId);
    }

    // TODO: Actualizar UI
  }

  /**
   * Verifica si un item está expandido
   * @param {string} itemId - ID del item
   * @returns {boolean}
   */
  isExpanded(itemId) {
    return this.expandedItems.has(itemId);
  }

  /**
   * Expande un item específico
   * @param {string} itemId - ID del item a expandir
   */
  expand(itemId) {
    if (!this.allowMultiple) {
      this.expandedItems.clear();
    }
    this.expandedItems.add(itemId);

    // TODO: Actualizar UI
  }

  /**
   * Colapsa un item específico
   * @param {string} itemId - ID del item a colapsar
   */
  collapse(itemId) {
    this.expandedItems.delete(itemId);

    // TODO: Actualizar UI
  }
}
