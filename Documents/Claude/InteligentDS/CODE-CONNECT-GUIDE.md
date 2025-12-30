# Code Connect Integration Guide

Esta guía te ayudará a conectar tus componentes de Figma con tu código Web Component usando Code Connect.

## ¿Qué es Code Connect?

Code Connect es una característica de Figma que vincula componentes de diseño con componentes de código. Permite que los desarrolladores vean ejemplos de código directamente en el archivo de Figma.

## Componentes Disponibles para Conectar

### 1. Typography Component
**Web Component**: `<ds-typography>`

#### Variantes disponibles:
- `title-hero` - Texto principal grande
- `title-page` - Título de página
- `subtitle` - Subtítulo
- `heading` - Encabezado
- `subheading` - Sub-encabezado
- `body-base` - Texto base
- `body-small` - Texto pequeño
- `body-strong` - Texto en negrita
- `body-emphasis` - Texto enfatizado
- `body-link` - Texto de enlace
- `body-code` - Texto de código
- `input` - Texto de entrada

#### Ejemplos de uso:
```html
<ds-typography variant="title-hero">Mi Título Principal</ds-typography>
<ds-typography variant="body-base" color="#333">Texto base</ds-typography>
<ds-typography variant="body-code">const x = 10;</ds-typography>
```

### 2. Color Component
**Web Component**: `<ds-color>`

#### Atributos:
- `color` (requerido) - Código hex del color
- `name` (requerido) - Nombre del color
- `size` (opcional) - sm, md, lg, xl (default: md)

#### Ejemplos de uso:
```html
<ds-color color="#0066CC" name="Primary" size="md"></ds-color>
<ds-color color="#d32f2f" name="Danger" size="lg"></ds-color>
<ds-color color="#388e3c" name="Success"></ds-color>
```

### 3. Button Component
**Web Component**: `<ds-button>`

#### Atributos:
- `variant` (opcional) - primary, secondary, danger, ghost (default: primary)
- `size` (opcional) - sm, md, lg (default: md)
- `disabled` (opcional) - boolean
- `type` (opcional) - button, submit, reset (default: button)

#### Ejemplos de uso:
```html
<ds-button variant="primary" size="md">Click aquí</ds-button>
<ds-button variant="secondary" size="lg">Opción secundaria</ds-button>
<ds-button variant="danger" disabled>Eliminar (deshabilitado)</ds-button>
<ds-button variant="ghost">Cancelar</ds-button>
```

## Cómo Configurar Code Connect en Figma

### Paso 1: Abre tu archivo de Figma
Ve a: https://www.figma.com/design/s4Bv0Dit8BWvxawcNI07Cs/Intelligent-Design-System

### Paso 2: Selecciona un componente
Por ejemplo, selecciona el componente "Title Hero" en la sección Typography.

### Paso 3: Abre el panel Code Connect
En el panel derecho, busca la pestaña "Code Connect" o haz clic en el icono de código.

### Paso 4: Habilita Code Connect
Si es la primera vez, verás un botón para "Enable Code Connect". Haz clic en él.

### Paso 5: Agrega el código del componente
Pega el código Web Component correspondiente:

```html
<ds-typography variant="title-hero">
  {title}
</ds-typography>
```

### Paso 6: Vincula el repositorio
Proporciona los detalles del repositorio:
- **GitHub URL**: https://github.com/pablorcgjn/InteligentDS
- **Branch**: main
- **File Path**: src/components/Typography.ts

### Paso 7: Publica los cambios
Guarda el archivo y los cambios se sincronizarán.

## Mapeo de Componentes Figma → Web Components

### Typography (Foundations > Typography)
| Variante Figma | Web Component |
|---|---|
| Title Hero | `<ds-typography variant="title-hero">` |
| Title Page | `<ds-typography variant="title-page">` |
| Subtitle | `<ds-typography variant="subtitle">` |
| Heading | `<ds-typography variant="heading">` |
| Subheading | `<ds-typography variant="subheading">` |
| Body Base | `<ds-typography variant="body-base">` |
| Body Small | `<ds-typography variant="body-small">` |
| Body Strong | `<ds-typography variant="body-strong">` |
| Body Emphasis | `<ds-typography variant="body-emphasis">` |
| Body Link | `<ds-typography variant="body-link">` |
| Body Code | `<ds-typography variant="body-code">` |
| Input | `<ds-typography variant="input">` |

### Color (Foundations > Color)
| Categoría | Ejemplo | Web Component |
|---|---|---|
| Background | Primary | `<ds-color color="#0066CC" name="Primary">` |
| Border | - | `<ds-color color="...">` |
| Text | - | `<ds-color color="...">` |
| Icon | - | `<ds-color color="...">` |

### Buttons (Components > Button)
| Variante | Web Component |
|---|---|
| Primary | `<ds-button variant="primary">` |
| Secondary | `<ds-button variant="secondary">` |
| Danger | `<ds-button variant="danger">` |
| Ghost | `<ds-button variant="ghost">` |

## Próximos Pasos

1. **Inicia sesión en Figma** con tu cuenta
2. **Abre tu archivo Intelligent Design System**
3. **Sigue los pasos anteriores** para cada componente
4. **Prueba el Code Connect** haciendo clic en el icono de código en un componente
5. **Comparte el archivo** con tu equipo para que vean los ejemplos de código

## Recursos Adicionales

- [Documentación oficial de Code Connect](https://help.figma.com/en/articles/14864933-code-connect)
- [Intelligent Design System Repository](https://github.com/pablorcgjn/InteligentDS)
- [Web Components MDN](https://developer.mozilla.org/es/docs/Web/Web_Components)

## Soporte

Si tienes problemas configurando Code Connect:
1. Verifica que el repositorio sea público
2. Asegúrate de que el token de GitHub sea válido
3. Confirma que los archivos estén en las rutas correctas
4. Revisa los logs de Code Connect en Figma

---

**Última actualización**: 30 de diciembre de 2025
