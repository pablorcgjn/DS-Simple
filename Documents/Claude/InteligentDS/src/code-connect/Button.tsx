import React from 'react';

/**
 * CODE CONNECT - Button Component
 * 
 * This file establishes Code Connect mappings for all Button variants
 * in the Intelligent Design System Figma file.
 */

// Primary Button
export const PrimaryButtonCode = () => (
  <div>
    <pre>{`<ds-button variant="primary" size="md">
  Click me
</ds-button>`}</pre>
  </div>
);

// Secondary Button
export const SecondaryButtonCode = () => (
  <div>
    <pre>{`<ds-button variant="secondary" size="md">
  Secondary Action
</ds-button>`}</pre>
  </div>
);

// Danger Button
export const DangerButtonCode = () => (
  <div>
    <pre>{`<ds-button variant="danger" size="md">
  Delete
</ds-button>`}</pre>
  </div>
);

// Ghost Button
export const GhostButtonCode = () => (
  <div>
    <pre>{`<ds-button variant="ghost" size="md">
  Cancel
</ds-button>`}</pre>
  </div>
);

// Small Button
export const SmallButtonCode = () => (
  <div>
    <pre>{`<ds-button variant="primary" size="sm">
  Small
</ds-button>`}</pre>
  </div>
);

// Large Button
export const LargeButtonCode = () => (
  <div>
    <pre>{`<ds-button variant="primary" size="lg">
  Large Button
</ds-button>`}</pre>
  </div>
);

// Disabled Button
export const DisabledButtonCode = () => (
  <div>
    <pre>{`<ds-button variant="primary" disabled>
  Disabled
</ds-button>`}</pre>
  </div>
);

// Submit Button
export const SubmitButtonCode = () => (
  <div>
    <pre>{`<ds-button variant="primary" type="submit">
  Submit Form
</ds-button>`}</pre>
  </div>
);

/**
 * Button CSS Variables
 */
export const ButtonCSSVariables = `
:root {
  /* Colors */
  --ds-color-primary: #0066CC;
  --ds-color-secondary: #f5f5f5;
  --ds-color-danger: #d32f2f;
  
  /* Button Sizes */
  --ds-button-padding-sm: 0.375rem 0.75rem;
  --ds-button-padding-md: 0.625rem 1rem;
  --ds-button-padding-lg: 0.875rem 1.5rem;
  
  /* Border Radius */
  --ds-border-radius: 0.375rem;
}
`;

/**
 * Button States to Implement:
 * 
 * 1. Default - Normal button appearance
 * 2. Hover - Slightly darker or lighter background
 * 3. Active/Pressed - Button appears pressed down
 * 4. Focus - Visual focus indicator for keyboard navigation
 * 5. Disabled - Reduced opacity, no cursor change
 * 6. Loading - Optional loading state with spinner
 */

export const ButtonStatesExample = `
/* Example implementation of button states */

button {
  /* Default state */
  transition: all 0.2s ease;
}

button:hover:not(:disabled) {
  filter: brightness(0.9);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

button:focus-visible {
  outline: 2px solid var(--ds-color-primary);
  outline-offset: 2px;
}

button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
`;
