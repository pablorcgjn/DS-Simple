# Utilidades

Funciones y helpers utilitarios del sistema de diseño.

## Tipos de Utilidades

- **Conversores**: Conversión entre unidades (px, rem, em)
- **Validadores**: Validación de colores, accesibilidad, etc.
- **Helpers**: Funciones auxiliares para componentes
- **Constantes**: Valores constantes compartidos

## Ejemplo

```javascript
// Convertir px a rem
export const pxToRem = (px, base = 16) => `${px / base}rem`;

// Validar contraste de color
export const checkContrast = (color1, color2) => {
  // Lógica de validación WCAG
};
```
