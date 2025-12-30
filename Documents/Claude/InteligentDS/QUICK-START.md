# 🚀 Quick Start Guide - Code Connect

**Si quieres empezar ahora mismo, lee esto primero.**

---

## 5 Minutos para Entender Code Connect

### ¿Qué es?
Code Connect es una característica de Figma que vincula componentes de diseño con ejemplos de código. Cuando un desarrollador selecciona un componente en Figma, ve el código para implementarlo.

### ¿Por qué lo necesitas?
- ✅ Reduce tiempo de búsqueda de ejemplos
- ✅ Mantiene código y diseño sincronizados
- ✅ Ayuda a nuevos desarrolladores
- ✅ Asegura consistencia

---

## Comenzar en 10 Pasos

### 1. Verifica los archivos
```bash
cd ~/Documents/Claude/InteligentDS
ls -la src/components/
```
Deberías ver: `Typography.ts`, `Color.ts`, `Button.ts`

### 2. Sube a GitHub
```bash
git add .
git commit -m "feat: Add Code Connect Web Components"
git push origin main
```

### 3. Abre Figma
https://www.figma.com/design/s4Bv0Dit8BWvxawcNI07Cs

### 4. Selecciona un componente
Ve a: **Foundations > Typography**
Selecciona: **Title Hero**

### 5. Abre el panel Code
En el panel derecho, busca la pestaña **"Code"** o **"Code Connect"**

### 6. Habilita Code Connect (si es primera vez)
Haz clic en: **"Enable Code Connect"**

### 7. Copia el código
Copia esto:
```html
<ds-typography variant="title-hero">
  Title Here
</ds-typography>
```

### 8. Pega en Figma
En el panel Code, pega el código anterior

### 9. Conecta el repositorio
- Repositorio: `pablorcgjn/InteligentDS`
- Branch: `main`
- Path: `src/components/Typography.ts`

### 10. Guarda y listo ✅

---

## Componentes a Mapear

### Typography (12)
```
title-hero, title-page, subtitle, heading, subheading,
body-base, body-small, body-strong, body-emphasis,
body-link, body-code, input
```

### Color (6)
```
Primary, Secondary, Success, Warning, Danger, Info
```

### Button (4 × 3 = 12)
```
Variantes: primary, secondary, danger, ghost
Tamaños: sm, md, lg
```

**Total: ~20 componentes**

---

## Tablas de Referencia Rápida

### Typography
| Componente | Código |
|---|---|
| Title Hero | `<ds-typography variant="title-hero">` |
| Body Base | `<ds-typography variant="body-base">` |
| Body Code | `<ds-typography variant="body-code">` |

### Color
| Color | Código |
|---|---|
| Primary | `<ds-color color="#0066CC" name="Primary">` |
| Danger | `<ds-color color="#d32f2f" name="Danger">` |
| Success | `<ds-color color="#388e3c" name="Success">` |

### Button
| Componente | Código |
|---|---|
| Primary MD | `<ds-button variant="primary" size="md">` |
| Danger LG | `<ds-button variant="danger" size="lg">` |

---

## Documentación Completa

Cuando necesites más detalles:

- **Instrucciones paso a paso**: `SETUP-CODE-CONNECT.md`
- **Mapeo visual completo**: `CODE-CONNECT-MAPPING.md`
- **Qué es Code Connect**: `CODE-CONNECT-GUIDE.md`
- **Índice de todo**: `INDEX-CODE-CONNECT.md`

---

## Troubleshooting Rápido

| Problema | Solución |
|---|---|
| No aparece icono <> | Verifica que repo sea público, recarga Figma (F5) |
| Error conectando | Verifica tu token de GitHub |
| Código no aparece | Verifica el formato, recarga la página |

---

## Resulta en 2 Horas

Con esto completo:
1. Los developers ven código en Figma ✅
2. Tu design system está más profesional ✅
3. La consistencia aumenta ✅

---

## Ahora:

1. Abre `SETUP-CODE-CONNECT.md`
2. Sigue los pasos
3. Mapea ~20 componentes (~30 min)
4. ¡Listo! 🎉

---

*Creado: 30 de diciembre de 2025*
