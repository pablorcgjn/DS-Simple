/**
 * Code Connect Configuration for Intelligent Design System
 * Maps Figma Design Tokens and Components to Web Components
 * 
 * This file establishes the connection between your Figma design system
 * and your TypeScript Web Components implementation.
 * 
 * Generated for: pablorcgjn/InteligentDS
 * Figma File: https://www.figma.com/design/s4Bv0Dit8BWvxawcNI07Cs
 */

/**
 * TYPOGRAPHY COMPONENT MAPPING
 * 
 * Figma Foundations > Typography
 * Web Component: <ds-typography variant="variant-name">
 * 
 * Variants available:
 * - title-hero: Large hero text
 * - title-page: Page title
 * - subtitle: Section subtitle
 * - heading: Standard heading
 * - subheading: Sub-heading
 * - body-base: Standard body text
 * - body-small: Smaller body text
 * - body-strong: Bold body text
 * - body-emphasis: Emphasized text
 * - body-link: Link text
 * - body-code: Code/monospace text
 * - input: Input field text
 * 
 * Example:
 * <ds-typography variant="title-hero">My Title</ds-typography>
 * <ds-typography variant="body-base" color="#333">Body text</ds-typography>
 */
export interface TypographyCodeConnect {
  variant: 'title-hero' | 'title-page' | 'subtitle' | 'heading' | 'subheading' | 'body-base' | 'body-small' | 'body-strong' | 'body-emphasis' | 'body-link' | 'body-code' | 'input';
  color?: string;
  weight?: string;
  children: string;
}

/**
 * COLOR COMPONENT MAPPING
 * 
 * Figma Color System
 * Web Component: <ds-color color="hex-code" name="color-name">
 * 
 * Color categories:
 * - Background colors
 * - Border colors
 * - Text colors
 * - Icon colors
 * - Semantic colors (success, warning, danger, info)
 * 
 * Example:
 * <ds-color color="#0066CC" name="Primary" size="md"></ds-color>
 * <ds-color color="#d32f2f" name="Danger" size="lg"></ds-color>
 */
export interface ColorCodeConnect {
  color: string;
  name: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

/**
 * BUTTON COMPONENT MAPPING
 * 
 * Figma Components > Buttons
 * Web Component: <ds-button variant="variant" size="size">
 * 
 * Button variants:
 * - primary: Main call-to-action
 * - secondary: Alternative action
 * - danger: Destructive action
 * - ghost: Transparent/outline style
 * 
 * Button sizes:
 * - sm: Small button
 * - md: Medium button (default)
 * - lg: Large button
 * 
 * Example:
 * <ds-button variant="primary" size="md">Click me</ds-button>
 * <ds-button variant="danger" size="lg" disabled>Delete</ds-button>
 */
export interface ButtonCodeConnect {
  variant?: 'primary' | 'secondary' | 'danger' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  children: string;
}

/**
 * DESIGN TOKENS MAPPING
 * 
 * Core design tokens that should be available as CSS variables
 */
export const designTokens = {
  colors: {
    primary: 'var(--ds-color-primary, #0066CC)',
    secondary: 'var(--ds-color-secondary, #f5f5f5)',
    danger: 'var(--ds-color-danger, #d32f2f)',
    success: 'var(--ds-color-success, #388e3c)',
    warning: 'var(--ds-color-warning, #ffa726)',
    info: 'var(--ds-color-info, #29b6f6)',
  },
  spacing: {
    xs: 'var(--ds-spacing-xs, 0.25rem)',
    sm: 'var(--ds-spacing-sm, 0.5rem)',
    md: 'var(--ds-spacing-md, 1rem)',
    lg: 'var(--ds-spacing-lg, 1.5rem)',
    xl: 'var(--ds-spacing-xl, 2rem)',
  },
  radius: {
    sm: 'var(--ds-radius-sm, 0.25rem)',
    md: 'var(--ds-radius-md, 0.375rem)',
    lg: 'var(--ds-radius-lg, 0.5rem)',
    xl: 'var(--ds-radius-xl, 0.75rem)',
  },
};

/**
 * FIGMA TO CODE MAPPING REFERENCE
 * 
 * Use these mappings to connect Figma components to Web Components:
 * 
 * FIGMA COMPONENT          | WEB COMPONENT              | NODE ID
 * -------------------------|----------------------------|------------------
 * Typography/Title Hero    | <ds-typography variant="title-hero">
 * Typography/Title Page    | <ds-typography variant="title-page">
 * Typography/Subtitle      | <ds-typography variant="subtitle">
 * Typography/Heading       | <ds-typography variant="heading">
 * Typography/Body Base     | <ds-typography variant="body-base">
 * -------------------------|----------------------------|------------------
 * Color/Primary            | <ds-color color="#0066CC" name="Primary">
 * Color/Secondary          | <ds-color color="#f5f5f5" name="Secondary">
 * Color/Danger             | <ds-color color="#d32f2f" name="Danger">
 * -------------------------|----------------------------|------------------
 * Button/Primary           | <ds-button variant="primary">
 * Button/Secondary         | <ds-button variant="secondary">
 * Button/Danger            | <ds-button variant="danger">
 * Button/Ghost             | <ds-button variant="ghost">
 * -------------------------|----------------------------|------------------
 * 
 * To establish Code Connect in Figma:
 * 1. Open your Figma file (Intelligent Design System)
 * 2. Select each component
 * 3. Go to Code Connect tab
 * 4. Paste the corresponding Web Component code
 * 5. Link to this repository: https://github.com/pablorcgjn/InteligentDS
 */
