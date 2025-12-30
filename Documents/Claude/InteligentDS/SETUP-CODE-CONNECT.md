# Instrucciones Paso a Paso: Configurar Code Connect en Figma

Este documento proporciona instrucciones detalladas para conectar cada componente de tu Design System en Figma.

## Requisitos Previos

1. ✅ Acceso a Figma (como editor del archivo)
2. ✅ Cuenta de GitHub con acceso al repositorio `pablorcgjn/InteligentDS`
3. ✅ Token de acceso personal de GitHub (si es necesario)
4. ✅ El repositorio debe ser público

## Información del Proyecto

- **Archivo Figma**: [Intelligent Design System](https://www.figma.com/design/s4Bv0Dit8BWvxawcNI07Cs)
- **Repositorio GitHub**: https://github.com/pablorcgjn/InteligentDS
- **Branch Principal**: `main`
- **Ruta del Componente**: `src/components/`

## Componentes a Configurar

### 1️⃣ Typography Component

#### Paso 1: Abre Figma
- Ve a https://www.figma.com/design/s4Bv0Dit8BWvxawcNI07Cs
- Navega a: **Foundations → Typography**

#### Paso 2: Selecciona el Primer Componente (Title Hero)
- En la sección "Title" de Typography, selecciona el componente "Title Hero"
- Verás la vista previa en la derecha

#### Paso 3: Abre Code Connect
- En el panel derecho, busca la pestaña **"Code"** o **"Code Connect"**
- Si es la primera vez, haz clic en **"Enable Code Connect"**

#### Paso 4: Agrega el Código
Copia y pega este código:

```html
<ds-typography variant="title-hero">
  Title Here
</ds-typography>
```

#### Paso 5: Configura la Conexión del Repositorio
- En Code Connect, haz clic en **"Connect to GitHub"** o **"Link repository"**
- Selecciona: **pablorcgjn/InteligentDS**
- Branch: **main**
- File path: **src/components/Typography.ts**

#### Paso 6: Guarda
- Presiona **"Save"** o **"Connect"**

#### Repite para Otros Componentes de Tipografía:

| Componente | Código |
|---|---|
| **Title Page** | `<ds-typography variant="title-page">Title Page</ds-typography>` |
| **Subtitle** | `<ds-typography variant="subtitle">Subtitle</ds-typography>` |
| **Heading** | `<ds-typography variant="heading">Heading</ds-typography>` |
| **Subheading** | `<ds-typography variant="subheading">Subheading</ds-typography>` |
| **Body Base** | `<ds-typography variant="body-base">Body text here</ds-typography>` |
| **Body Small** | `<ds-typography variant="body-small">Small body text</ds-typography>` |
| **Body Small Strong** | `<ds-typography variant="body-small" weight="700">Small body strong</ds-typography>` |
| **Body Strong** | `<ds-typography variant="body-strong" weight="700">Bold text</ds-typography>` |
| **Body Emphasis** | `<ds-typography variant="body-emphasis">Emphasized text</ds-typography>` |
| **Body Link** | `<ds-typography variant="body-link">Link text</ds-typography>` |
| **Body Code** | `<ds-typography variant="body-code">const x = 10;</ds-typography>` |
| **Input** | `<ds-typography variant="input">Input text</ds-typography>` |

---

### 2️⃣ Color Component

#### Paso 1: Navega a Colores
- En Figma, ve a: **Foundations → Color**
- Verás secciones: Background, Border, Text, Icon

#### Paso 2: Selecciona un Color
- Empieza con la sección **Background**
- Selecciona el primer color (P50 o similar)

#### Paso 3: Abre Code Connect
- Panel derecho → **Code** tab
- Verás el campo para pegar código

#### Paso 4: Agrega el Código
Para el color primario:

```html
<ds-color color="#0066CC" name="Primary" size="md"></ds-color>
```

#### Paso 5: Conecta al Repositorio
- File path: **src/components/Color.ts**
- Guarda los cambios

#### Repite para la Paleta de Colores:

| Color | Código |
|---|---|
| **Primary** | `<ds-color color="#0066CC" name="Primary" size="md"></ds-color>` |
| **Secondary** | `<ds-color color="#f5f5f5" name="Secondary" size="md"></ds-color>` |
| **Danger** | `<ds-color color="#d32f2f" name="Danger" size="md"></ds-color>` |
| **Success** | `<ds-color color="#388e3c" name="Success" size="md"></ds-color>` |
| **Warning** | `<ds-color color="#ffa726" name="Warning" size="md"></ds-color>` |
| **Info** | `<ds-color color="#29b6f6" name="Info" size="md"></ds-color>` |

---

### 3️⃣ Button Component (Si aplica)

#### Paso 1: Navega a Botones
- En Figma, ve a: **Components → Button** (o donde estén tus botones)

#### Paso 2: Selecciona Variante Primary
- Selecciona el componente principal de botón

#### Paso 3: Abre Code Connect
- Panel derecho → **Code**

#### Paso 4: Agrega el Código

```html
<ds-button variant="primary" size="md">
  Click me
</ds-button>
```

#### Paso 5: Conecta al Repositorio
- File path: **src/components/Button.ts**

#### Repite para Variantes:

| Variante | Código |
|---|---|
| **Primary** | `<ds-button variant="primary" size="md">Primary</ds-button>` |
| **Secondary** | `<ds-button variant="secondary" size="md">Secondary</ds-button>` |
| **Danger** | `<ds-button variant="danger" size="md">Delete</ds-button>` |
| **Ghost** | `<ds-button variant="ghost" size="md">Cancel</ds-button>` |
| **Small** | `<ds-button variant="primary" size="sm">Small</ds-button>` |
| **Large** | `<ds-button variant="primary" size="lg">Large</ds-button>` |

---

## ✅ Validación

Después de configurar Code Connect:

1. **Recarga Figma** - F5 o Cmd+R
2. **Selecciona un Componente Conectado** - Deberías ver el código en el panel
3. **Prueba el Icono de Código** - Haz clic en el icono de `</>` en el inspector
4. **Verifica la Vista Previa** - El código debe mostrarse en una ventana modal

## 🐛 Solución de Problemas

### "No aparece el icono de código"
- Asegúrate de que el repositorio sea **público**
- Verifica que estés usando la rama **main**
- Intenta recargar la página de Figma

### "Error al conectar repositorio"
- Verifica tu token de GitHub (si se solicitó)
- Confirma que el repositorio existe y está disponible
- Intenta desconectar y volver a conectar

### "El código no se actualiza"
- Es normal - Code Connect muestra ejemplos, no código en vivo
- Si necesitas cambiar el código, hazlo aquí en GitHub
- Después guarda el archivo de Figma para refrescar

### "¿Dónde veo los cambios?"
- Los cambios se guardan en Figma
- Otros miembros del equipo ven el código actualizado cuando abren el archivo
- No hay sincronización automática en tiempo real con GitHub

## 📊 Próximos Pasos

1. **Completa todos los componentes** listados arriba
2. **Invita a tu equipo** al archivo de Figma
3. **Comparte el repositorio** para que vean la implementación
4. **Documenta cualquier convención especial** de tu equipo
5. **Considera configurar Storybook** para documentación interactiva

## 📚 Recursos

- [Code Connect Documentation](https://help.figma.com/en/articles/14864933-code-connect)
- [Web Components MDN](https://developer.mozilla.org/es/docs/Web/Web_Components)
- [InteligentDS Repository](https://github.com/pablorcgjn/InteligentDS)

---

**¿Preguntas?** Revisa la guía `CODE-CONNECT-GUIDE.md` para más detalles.
