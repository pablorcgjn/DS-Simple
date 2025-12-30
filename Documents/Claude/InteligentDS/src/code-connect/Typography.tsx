import React from 'react';
import { DSTypography } from '../components/Typography';

/**
 * CODE CONNECT - Typography Component
 * 
 * This file establishes Code Connect mappings for all Typography variants
 * in the Intelligent Design System Figma file.
 * 
 * When you select a typography component in Figma, you'll see this code
 * as a reference for implementation in your Web Components.
 */

// Title Hero
export const TitleHeroCode = () => (
  <div>
    <pre>{`<ds-typography variant="title-hero">
  My Hero Title
</ds-typography>`}</pre>
  </div>
);

// Title Page
export const TitlePageCode = () => (
  <div>
    <pre>{`<ds-typography variant="title-page">
  Page Title
</ds-typography>`}</pre>
  </div>
);

// Subtitle
export const SubtitleCode = () => (
  <div>
    <pre>{`<ds-typography variant="subtitle">
  This is a subtitle
</ds-typography>`}</pre>
  </div>
);

// Heading
export const HeadingCode = () => (
  <div>
    <pre>{`<ds-typography variant="heading">
  Heading Text
</ds-typography>`}</pre>
  </div>
);

// Subheading
export const SubheadingCode = () => (
  <div>
    <pre>{`<ds-typography variant="subheading">
  Subheading Text
</ds-typography>`}</pre>
  </div>
);

// Body Base
export const BodyBaseCode = () => (
  <div>
    <pre>{`<ds-typography variant="body-base">
  This is body text. It's the default text style used for paragraphs and content.
</ds-typography>`}</pre>
  </div>
);

// Body Small
export const BodySmallCode = () => (
  <div>
    <pre>{`<ds-typography variant="body-small">
  This is smaller body text for captions and notes.
</ds-typography>`}</pre>
  </div>
);

// Body Strong
export const BodyStrongCode = () => (
  <div>
    <pre>{`<ds-typography variant="body-strong" weight="700">
  This text is bold/strong
</ds-typography>`}</pre>
  </div>
);

// Body Emphasis
export const BodyEmphasisCode = () => (
  <div>
    <pre>{`<ds-typography variant="body-emphasis">
  This text is emphasized/italic
</ds-typography>`}</pre>
  </div>
);

// Body Link
export const BodyLinkCode = () => (
  <div>
    <pre>{`<ds-typography variant="body-link">
  This is a link
</ds-typography>`}</pre>
  </div>
);

// Body Code
export const BodyCodeCode = () => (
  <div>
    <pre>{`<ds-typography variant="body-code">
  const variable = "code";
</ds-typography>`}</pre>
  </div>
);

// Input
export const InputCode = () => (
  <div>
    <pre>{`<ds-typography variant="input" weight="400">
  Input text style
</ds-typography>`}</pre>
  </div>
);

/**
 * CSS Variables for Typography
 * 
 * Make sure these CSS variables are defined in your global styles:
 */
export const TypographyCSSVariables = `
:root {
  /* Font Sizes */
  --ds-font-size-title-hero: 3.6rem;
  --ds-font-size-title-page: 2.8rem;
  --ds-font-size-subtitle: 1.5rem;
  --ds-font-size-heading: 1.25rem;
  --ds-font-size-subheading: 1.125rem;
  --ds-font-size-body-base: 1rem;
  --ds-font-size-body-small: 0.875rem;
  
  /* Font Weights */
  --ds-font-weight-regular: 400;
  --ds-font-weight-medium: 500;
  --ds-font-weight-semibold: 600;
  --ds-font-weight-bold: 700;
  
  /* Line Heights */
  --ds-line-height-tight: 1.2;
  --ds-line-height-normal: 1.5;
  --ds-line-height-relaxed: 1.8;
}
`;
