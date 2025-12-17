# Accordion

Componente accordion (acordeón) para mostrar contenido plegable.

## Descripción

El accordion permite a los usuarios expandir y colapsar secciones de contenido, ideal para organizar información de manera compacta y accesible.

## Uso

```javascript
// Ejemplo de uso básico
<Accordion>
  <AccordionItem title="Sección 1">
    Contenido de la primera sección
  </AccordionItem>
  <AccordionItem title="Sección 2">
    Contenido de la segunda sección
  </AccordionItem>
</Accordion>
```

## Props

### Accordion
- `defaultExpanded` (string | string[]): ID(s) de los items expandidos por defecto
- `allowMultiple` (boolean): Permite múltiples items abiertos simultáneamente
- `className` (string): Clase CSS adicional

### AccordionItem
- `title` (string | ReactNode): Título del item
- `id` (string): Identificador único
- `disabled` (boolean): Deshabilita el item
- `children` (ReactNode): Contenido del accordion

## Variantes

- **Simple**: Un solo item puede estar abierto
- **Multiple**: Múltiples items pueden estar abiertos
- **Controlled**: Estado controlado externamente

## Accesibilidad

- ✅ Navegación por teclado (Enter, Space, Arrow keys)
- ✅ Roles ARIA apropiados (`button`, `region`)
- ✅ Estados ARIA (`aria-expanded`, `aria-controls`)
- ✅ Soporte para lectores de pantalla

## Tokens utilizados

- **Colores**: Para bordes y backgrounds
- **Spacing**: Para padding y márgenes
- **Typography**: Para títulos y contenido
- **Borders**: Para radios y separadores
- **Shadows**: Opcional para elevación

## Estados

- Default
- Hover
- Focus
- Active/Expanded
- Disabled
