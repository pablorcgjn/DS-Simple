# DS-Simple - Sistema de Diseño

## Descripción del Proyecto
DS-Simple es un sistema de diseño que proporciona una biblioteca de componentes reutilizables y tokens de diseño para un desarrollo UI consistente.

## Estructura del Proyecto
```
DS-Simple/
├── components/          # Componentes UI reutilizables
│   ├── Button          # Componente de botón
│   ├── accordion       # Componente acordeón
│   ├── list            # Componente de lista
│   └── README.md       # Documentación de componentes
├── tokens/             # Design tokens
│   ├── colors/         # Paletas de colores
│   ├── typography/     # Tokens de tipografía
│   ├── spacing/        # Escala de espaciado
│   ├── shadows/        # Sistema de sombras
│   ├── borders/        # Radios y estilos de bordes
│   └── README.md
├── styles/             # Estilos globales
│   └── README.md
├── utils/              # Funciones utilitarias
│   └── README.md
├── docs/               # Documentación
│   └── README.md
├── examples/           # Ejemplos de uso
│   └── README.md
├── index.js            # Punto de entrada principal
├── package.json        # Configuración del paquete
├── README.md           # Documentación del proyecto
└── CLAUDE.MD          # Contexto para asistentes IA (este archivo)
```

## Propósito
Este sistema de diseño tiene como objetivo:
- Proporcionar componentes UI reutilizables
- Establecer patrones de diseño consistentes
- Mantener tokens de diseño (colores, espaciado, tipografía)
- Garantizar accesibilidad y mejores prácticas

## Guías de Desarrollo

### Estilo de Código
- Seguir convenciones de nomenclatura consistentes
- Escribir código limpio y autodocumentado
- Mantener componentes pequeños y enfocados
- Priorizar la accesibilidad (a11y)

### Desarrollo de Componentes
Al crear componentes:
1. Comenzar con HTML semántico
2. Aplicar estilos a través de tokens de diseño
3. Asegurar soporte de navegación por teclado
4. Agregar etiquetas ARIA donde sea necesario
5. Probar en diferentes tamaños de pantalla

### Tokens de Diseño
Los tokens de diseño deben incluir:
- **Colores**: Paletas primarias, secundarias y neutrales
- **Tipografía**: Familias de fuentes, tamaños, pesos, alturas de línea
- **Espaciado**: Escala de espaciado consistente
- **Breakpoints**: Puntos de quiebre para diseño responsivo
- **Sombras**: Sistema de elevación
- **Border Radius**: Redondeo de esquinas consistente

## Estado Actual del Proyecto

### Componentes Implementados
- **Button**: Componente de botón primario
- **accordion**: Componente de acordeón (en desarrollo)
- **list**: Componente de lista (en desarrollo)

### Infraestructura de Tokens
La estructura de tokens está establecida con las siguientes categorías:
- `tokens/colors/`: Paletas de colores
- `tokens/typography/`: Sistema tipográfico
- `tokens/spacing/`: Escala de espaciado
- `tokens/shadows/`: Sistema de sombras y elevación
- `tokens/borders/`: Bordes y radios

### Próximos Pasos
- Desarrollar tokens específicos en cada categoría
- Completar componentes básicos (Input, Label, etc.)
- Configurar sistema de build para producción
- Implementar testing (unitarios y visuales)
- Crear documentación interactiva (Storybook o similar)

## Convenciones

### Nomenclatura
- Usar nombres descriptivos y claros
- Componentes: PascalCase (ej., `Button`, `Card`)
- Utilidades: camelCase (ej., `formatDate`, `validateEmail`)
- Constantes: UPPER_SNAKE_CASE (ej., `PRIMARY_COLOR`)

### Flujo de Git
- Trabajar en ramas de características
- Escribir mensajes de commit claros
- Mantener commits atómicos y enfocados

## Notas para Asistentes IA

### Contexto del Proyecto
- **Tipo**: Sistema de diseño modular
- **Estado**: Desarrollo activo - estructura base establecida, componentes en progreso
- **Tecnología**: JavaScript ES6+ (type: "module" en package.json)
- **Sin framework específico**: Aún no se ha elegido React/Vue/Web Components
- **Sin build tool**: Configuración de desarrollo/build pendiente

### Al Realizar Cambios

#### Antes de Agregar Dependencias
- Preguntar sobre preferencias de framework (React, Vue, Web Components, vanilla JS)
- Confirmar herramientas de build preferidas (Vite, Webpack, Rollup, etc.)
- Verificar si se requiere TypeScript o JavaScript puro

#### Al Crear/Modificar Componentes
- Verificar si existen tokens de diseño relevantes antes de hardcodear valores
- Mantener consistencia con componentes existentes (Button, accordion, list)
- Seguir la estructura de carpetas establecida en `/components`
- Documentar props, variantes y ejemplos de uso
- Considerar accesibilidad desde el inicio (ARIA, navegación por teclado)

#### Al Trabajar con Tokens
- Agregar nuevos tokens en la categoría apropiada (`colors/`, `typography/`, etc.)
- Usar nomenclatura descriptiva y consistente
- Documentar el propósito y casos de uso de cada token
- Mantener valores escalables y reutilizables

### Consideraciones Prioritarias
1. **Accesibilidad**: Asegurar que todos los componentes sean accesibles
2. **Consistencia**: Mantener el uso de tokens de diseño
3. **Simplicidad**: Mantener la API simple e intuitiva
4. **Rendimiento**: Optimizar para tamaño de bundle y tiempo de ejecución
5. **Documentación**: Mantener la documentación actualizada

## Configuración Técnica

### Package.json
- **Nombre**: ds-simple
- **Versión**: 0.1.0
- **Tipo**: module (ES6 modules)
- **Entry point**: index.js
- **Licencia**: MIT

### Scripts Disponibles
```bash
npm run dev     # Servidor de desarrollo (por configurar)
npm run build   # Build de producción (por configurar)
npm test        # Tests (por configurar)
```

## Consideraciones Futuras

### Desarrollo
- [ ] Elegir y configurar framework/enfoque (React, Vue, Web Components, vanilla)
- [ ] Configurar herramienta de build (Vite, Webpack, Rollup)
- [ ] Implementar tokens de diseño completos en cada categoría
- [ ] Desarrollar componentes básicos completos
- [ ] Configurar linting (ESLint) y formatting (Prettier)

### Testing
- [ ] Configurar framework de testing (Jest, Vitest, etc.)
- [ ] Tests unitarios para componentes
- [ ] Tests de accesibilidad automatizados
- [ ] Regresión visual (Chromatic, Percy, etc.)

### Documentación
- [ ] Configurar Storybook o herramienta similar
- [ ] Documentar cada componente con ejemplos
- [ ] Crear guías de uso y mejores prácticas
- [ ] Documentar sistema de tokens

### Distribución
- [ ] Configurar build para producción
- [ ] Optimización de bundle
- [ ] Proceso de versionado semántico
- [ ] Publicación en npm (si aplica)
- [ ] Generación de changelog automático

### CI/CD
- [ ] GitHub Actions para tests
- [ ] Validación de PRs automática
- [ ] Deploy automático de documentación
- [ ] Verificación de accesibilidad en CI

## Referencia Rápida para IA

### Comandos Comunes
```bash
# Ver estructura del proyecto
ls -R

# Buscar componentes
find components/ -type f

# Buscar tokens
find tokens/ -type f
```

### Archivos Clave
- `index.js`: Punto de entrada principal del sistema de diseño
- `package.json`: Configuración del paquete y dependencias
- `components/README.md`: Guía de componentes
- `tokens/README.md`: Documentación de tokens

### Patrones de Componentes
Al crear un nuevo componente, considerar:
1. **Estructura**: ¿Archivo único o carpeta con múltiples archivos?
2. **Estilos**: ¿CSS inline, módulos CSS, CSS-in-JS?
3. **Tokens**: ¿Qué tokens de diseño aplican?
4. **Variantes**: ¿Qué variantes necesita? (size, variant, color, etc.)
5. **Accesibilidad**: Roles ARIA, navegación por teclado, estados focus
6. **Props/API**: Interfaz clara y consistente

### Preguntas para Clarificar
Cuando no esté claro el enfoque, preguntar al usuario sobre:
- Framework preferido (React, Vue, Web Components, vanilla JS)
- Herramienta de build (Vite, Webpack, Rollup, ninguna)
- Estilo de CSS (módulos, Tailwind, CSS-in-JS, CSS puro)
- TypeScript vs JavaScript
- Nivel de soporte de navegadores requerido
