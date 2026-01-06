# Configuración CI/CD

Este documento explica cómo configurar los workflows de GitHub Actions para el proyecto.

## Workflows Configurados

### 1. **PR Checks** (`pr-checks.yml`)
- ✅ Se ejecuta automáticamente en cada Pull Request
- Verifica: linting, build de app y build de Storybook
- **No requiere configuración adicional**

### 2. **Deploy to GitHub Pages** (`main.yml`)
- ✅ Se ejecuta automáticamente al hacer merge a `main`
- Despliega app y Storybook a GitHub Pages
- **Requiere**: Habilitar GitHub Pages en Settings

### 3. **Code Connect Publish** (`code-connect-publish.yml`)
- 🔄 Se ejecuta al hacer cambios en archivos `.figma.tsx` o `figma.config.json`
- Publica automáticamente los cambios de Code Connect a Figma
- **Requiere**: Secret `FIGMA_ACCESS_TOKEN`

### 4. **PR Preview** (`pr-preview.yml`)
- 🔄 Genera preview de Storybook para cada PR
- Publica comentario en el PR con link al preview
- **Requiere**: Secrets de Netlify

## Configuración de Secretos

### 1. FIGMA_ACCESS_TOKEN

Para Code Connect auto-publish:

1. Ve a **Settings** → **Secrets and variables** → **Actions**
2. Click en **New repository secret**
3. Name: `FIGMA_ACCESS_TOKEN`
4. Value: Tu token de Figma (actualmente en `.env` local)
5. Click **Add secret**

### 2. NETLIFY_AUTH_TOKEN y NETLIFY_SITE_ID

Para PR previews:

#### Obtener Netlify Auth Token:
1. Ve a https://app.netlify.com
2. Crea una cuenta o inicia sesión
3. Ve a **User Settings** → **Applications** → **Personal access tokens**
4. Click **New access token**
5. Copia el token

#### Obtener Netlify Site ID:
1. En Netlify, crea un nuevo sitio (puede ser vacío)
2. Ve a **Site settings** → **General** → **Site details**
3. Copia el **Site ID** (formato: `xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx`)

#### Agregar a GitHub:
1. Ve a **Settings** → **Secrets and variables** → **Actions**
2. Agrega dos secretos:
   - Name: `NETLIFY_AUTH_TOKEN`, Value: tu token
   - Name: `NETLIFY_SITE_ID`, Value: tu site ID

## Habilitar GitHub Pages

1. Ve a **Settings** → **Pages**
2. En **Source**, selecciona **GitHub Actions**
3. Guarda los cambios

Una vez configurado, cada merge a `main` desplegará automáticamente a:
`https://{username}.github.io/{repo-name}/`

## Verificar Workflows

Después de configurar, puedes verificar que todo funciona:

1. **PR Checks**: Crea un PR y verifica que pase los checks
2. **Code Connect**: Haz cambios en un archivo `.figma.tsx` y verifica que se publique
3. **PR Preview**: Crea un PR y verifica que se genere el preview
4. **GitHub Pages**: Haz merge a main y verifica el deploy

## Troubleshooting

### Code Connect falla con error de autenticación
- Verifica que `FIGMA_ACCESS_TOKEN` esté configurado correctamente
- El token debe tener permisos de "Write" en Code Connect

### PR Preview falla
- Verifica que ambos secrets de Netlify estén configurados
- Verifica que el Site ID sea correcto

### GitHub Pages no despliega
- Verifica que GitHub Pages esté habilitado en Settings
- Verifica que el workflow tenga permisos correctos
