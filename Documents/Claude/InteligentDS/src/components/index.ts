/**
 * DS-Simple - Components Index
 * Punto de entrada para todos los componentes del sistema de diseño
 */

// Web Components
export { DSTypography } from './Typography';
export { DSColor } from './Color';
export { DSButton } from './Button';

// Tipos TypeScript
export type {
  TypographyCodeConnect,
  ColorCodeConnect,
  ButtonCodeConnect,
} from '../code-connect-config';

/**
 * Componentes Disponibles:
 * 
 * 1. DSTypography
 *    - Variantes: title-hero, title-page, subtitle, heading, subheading,
 *                 body-base, body-small, body-strong, body-emphasis,
 *                 body-link, body-code, input
 *    - Atributos: variant, color, weight
 * 
 * 2. DSColor
 *    - Muestra muestras de color
 *    - Atributos: color, name, size (sm, md, lg, xl)
 * 
 * 3. DSButton
 *    - Variantes: primary, secondary, danger, ghost
 *    - Tamaños: sm, md, lg
 *    - Atributos: variant, size, disabled, type
 * 
 * Ejemplo de uso:
 * 
 *   <ds-typography variant="heading">Mi Encabezado</ds-typography>
 *   <ds-button variant="primary" size="md">Click aquí</ds-button>
 *   <ds-color color="#0066CC" name="Primary"></ds-color>
 */

// Registrar componentes globalmente
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'ds-typography': any;
      'ds-button': any;
      'ds-color': any;
    }
  }
}
