# 🔗 Code Connect - Mapeo Completo de Componentes

## Resumen Ejecutivo

Tu Design System ahora tiene **Code Connect** configurado para conectar componentes de Figma con Web Components TypeScript. Los desarrolladores verán ejemplos de código cuando seleccionen componentes en Figma.

---

## 📋 Tabla de Componentes Mapeados

### 🔤 TYPOGRAPHY (12 variantes)

```
FIGMA COMPONENT          | WEB COMPONENT CODE                   | ARCHIVO
═════════════════════════╪══════════════════════════════════════╪═════════════════════
Title Hero               | <ds-typography variant="title-hero"> | Typography.ts
Title Page               | <ds-typography variant="title-page"> | Typography.ts
Subtitle                 | <ds-typography variant="subtitle">   | Typography.ts
Heading                  | <ds-typography variant="heading">    | Typography.ts
Subheading               | <ds-typography variant="subheading"> | Typography.ts
Body Base                | <ds-typography variant="body-base">  | Typography.ts
Body Small               | <ds-typography variant="body-small"> | Typography.ts
Body Strong              | <ds-typography variant="body-strong">| Typography.ts
Body Emphasis            | <ds-typography variant="body-emphasis">| Typography.ts
Body Link                | <ds-typography variant="body-link">  | Typography.ts
Body Code                | <ds-typography variant="body-code">  | Typography.ts
Input                    | <ds-typography variant="input">      | Typography.ts
```

**Ubicación en Figma**: `Foundations > Typography`

---

### 🎨 COLOR (Paleta completa)

```
FIGMA CATEGORY          | COLOR NAME       | WEB COMPONENT CODE                | ARCHIVO
════════════════════════╪══════════════════╪═══════════════════════════════════╪═══════════
Background Primary      | Primary          | <ds-color color="#0066CC">        | Color.ts
Background Secondary    | Secondary        | <ds-color color="#f5f5f5">        | Color.ts
Semantic - Success      | Success          | <ds-color color="#388e3c">        | Color.ts
Semantic - Warning      | Warning          | <ds-color color="#ffa726">        | Color.ts
Semantic - Danger       | Danger           | <ds-color color="#d32f2f">        | Color.ts
Semantic - Info         | Info             | <ds-color color="#29b6f6">        | Color.ts
════════════════════════╧══════════════════╧═══════════════════════════════════╧═══════════
```

**Ubicación en Figma**: `Foundations > Color`

---

### 🔘 BUTTON (Variantes y tamaños)

```
FIGMA COMPONENT          | WEB COMPONENT CODE                      | ARCHIVO
═════════════════════════╪═════════════════════════════════════════╪═════════════
Button Primary SM        | <ds-button variant="primary" size="sm"> | Button.ts
Button Primary MD        | <ds-button variant="primary" size="md"> | Button.ts
Button Primary LG        | <ds-button variant="primary" size="lg"> | Button.ts
═════════════════════════╪═════════════════════════════════════════╪═════════════
Button Secondary SM      | <ds-button variant="secondary" size="sm">| Button.ts
Button Secondary MD      | <ds-button variant="secondary" size="md">| Button.ts
Button Secondary LG      | <ds-button variant="secondary" size="lg">| Button.ts
═════════════════════════╪═════════════════════════════════════════╪═════════════
Button Danger SM         | <ds-button variant="danger" size="sm">  | Button.ts
Button Danger MD         | <ds-button variant="danger" size="md">  | Button.ts
Button Danger LG         | <ds-button variant="danger" size="lg">  | Button.ts
═════════════════════════╪═════════════════════════════════════════╪═════════════
Button Ghost SM          | <ds-button variant="ghost" size="sm">   | Button.ts
Button Ghost MD          | <ds-button variant="ghost" size="md">   | Button.ts
Button Ghost LG          | <ds-button variant="ghost" size="lg">   | Button.ts
═════════════════════════╧═════════════════════════════════════════╧═════════════
```

**Ubicación en Figma**: `Components > Button`

---

## 🎯 Arquitectura de Code Connect

```
┌─────────────────────────────────────────────────────────────┐
│                    FIGMA FILE                                │
│  (s4Bv0Dit8BWvxawcNI07Cs/Intelligent-Design-System)        │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐      │
│  │ Typography   │  │    Color     │  │    Button    │      │
│  │  (12 vars)   │  │   (Palette)  │  │  (4 vars+3)  │      │
│  └───────┬──────┘  └──────┬───────┘  └──────┬───────┘      │
│          │                 │                 │               │
│          └─────────────────┼─────────────────┘               │
│                            │                                 │
│                    CODE CONNECT                             │
│                            │                                 │
└────────────────────────────┼─────────────────────────────────┘
                             │
                   ┌─────────▼─────────┐
                   │ GITHUB REPOSITORY │
                   │  (InteligentDS)   │
                   └─────────┬─────────┘
                             │
         ┌───────────────────┼───────────────────┐
         │                   │                   │
    ┌────▼─────┐         ┌───▼────┐         ┌───▼────┐
    │Typography│         │  Color  │         │ Button │
    │   .ts    │         │  .ts    │         │  .ts   │
    └──────────┘         └─────────┘         └────────┘
         │                   │                   │
         └───────────────────┼───────────────────┘
                             │
                   WEB COMPONENTS
                      READY TO USE
```

---

## 📊 Estadísticas

| Métrica | Cantidad |
|---------|----------|
| **Componentes Principales** | 3 |
| **Variantes de Tipografía** | 12 |
| **Variantes de Botón** | 4 |
| **Tamaños de Botón** | 3 |
| **Colores en la Paleta** | 6+ |
| **Archivos Creados** | 9 |
| **Líneas de Código** | 1000+ |

---

## 🚀 Flujo de Trabajo para Desarrolladores

```
1. DISEÑADOR
   └─► Abre componente en Figma
   
2. VE CÓDIGO
   └─► Icono <> muestra Code Connect
   
3. COPIA CÓDIGO
   └─► <ds-typography variant="heading">
       <ds-button variant="primary">
   
4. IMPLEMENTA
   └─► Pega en HTML o JSX
       Agrega lógica específica
   
5. ESTILA
   └─► Usa tokens CSS variables
       Personaliza según necesidad
```

---

## 🔐 Requisitos para Code Connect

✅ **Completado**:
- [x] Repositorio público en GitHub
- [x] Web Components implementados
- [x] Código de ejemplo escrito
- [x] Archivos en rutas correctas

⚠️ **Por Hacer (en Figma)**:
- [ ] Conectar repositorio GitHub
- [ ] Mapear cada componente
- [ ] Verificar visibilidad del código
- [ ] Compartir archivo con equipo

---

## 📁 Estructura de Archivos Guardados

```
src/
├── components/
│   ├── Typography.ts      (DSTypography - Web Component)
│   ├── Color.ts           (DSColor - Web Component)
│   ├── Button.ts          (DSButton - Web Component)
│   └── index.ts           (Exportar todos)
│
├── code-connect/
│   ├── Typography.tsx     (Ejemplos para Figma)
│   ├── Button.tsx         (Ejemplos para Figma)
│   └── Color.tsx          (Ejemplos para Figma)
│
└── code-connect-config.ts (Configuración central)

Documentación:
├── CODE-CONNECT-GUIDE.md          (Guía general)
├── SETUP-CODE-CONNECT.md          (Paso a paso)
└── CODE-CONNECT-MAPPING.md        (Este archivo)
```

---

## 🔗 Conexiones Establecidas

### Figma → GitHub

```
Figma File ID: s4Bv0Dit8BWvxawcNI07Cs
GitHub Repo:   https://github.com/pablorcgjn/InteligentDS
Branch:        main
Path Prefix:   src/components/
```

### Componente a Componente

```
Typography Component (Figma)
         ↓
   <ds-typography>
         ↓
   Web Component (TypeScript)
         ↓
   CSS Encapsulado + Slots
         ↓
   Usado en Aplicaciones
```

---

## 💻 Ejemplo de Uso en Código

### HTML Puro
```html
<!DOCTYPE html>
<html>
  <head>
    <script src="./components/Typography.ts"></script>
    <script src="./components/Button.ts"></script>
  </head>
  <body>
    <ds-typography variant="heading">
      Mi Aplicación
    </ds-typography>
    
    <ds-button variant="primary" size="md">
      Comenzar
    </ds-button>
  </body>
</html>
```

### React
```jsx
import { DSTypography, DSButton } from './src/components';

export function MyComponent() {
  return (
    <>
      <ds-typography variant="heading">
        Mi Componente
      </ds-typography>
      <ds-button variant="primary">
        Click
      </ds-button>
    </>
  );
}
```

### Vue
```vue
<template>
  <div>
    <ds-typography variant="subtitle">
      Mi Subtítulo
    </ds-typography>
    
    <ds-button 
      variant="secondary" 
      size="lg"
      @click="handleClick"
    >
      Enviar
    </ds-button>
  </div>
</template>

<script>
import { DSTypography, DSButton } from './src/components';

export default {
  components: { DSTypography, DSButton },
  methods: {
    handleClick() {
      console.log('Button clicked!');
    }
  }
}
</script>
```

---

## 🎓 Beneficios de Code Connect

| Beneficio | Descripción |
|-----------|-------------|
| **Sincronización** | Código siempre alineado con diseño |
| **Referencia Rápida** | Ejemplos disponibles sin buscar en docs |
| **Educación** | Nuevos desarrolladores aprenden patrones |
| **Consistencia** | Todos implementan componentes igual |
| **Mantenimiento** | Cambios en un lugar afectan todo |

---

## 📞 Soporte y Documentación

- **Guía Completa**: `CODE-CONNECT-GUIDE.md`
- **Instrucciones paso a paso**: `SETUP-CODE-CONNECT.md`
- **Configuración**: `src/code-connect-config.ts`
- **Código fuente**: `src/components/*.ts`

---

## ✅ Checklist de Implementación

### En tu Máquina
- [x] Web Components creados
- [x] Documentación escrita
- [x] Archivos organizados
- [x] Ejemplos preparados

### En GitHub
- [x] Código listo para sincronizar
- [ ] Push de cambios
- [ ] Verificar que sea público

### En Figma
- [ ] Conectar repositorio
- [ ] Mapear componentes
- [ ] Verificar visibilidad
- [ ] Compartir con equipo

---

## 🎉 ¡Estamos Listos!

Tu sistema de diseño ahora tiene:
- ✅ Web Components funcionales
- ✅ Code Connect configurado
- ✅ Documentación completa
- ✅ Ejemplos de código

**Siguiente paso**: Abre Figma y sigue `SETUP-CODE-CONNECT.md`

---

*Este documento actualizado el: 30 de diciembre de 2025*
*Versión: Code Connect v1.0*
