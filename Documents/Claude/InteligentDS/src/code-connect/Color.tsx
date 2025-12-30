import React from 'react';

/**
 * CODE CONNECT - Color Component
 * 
 * This file establishes Code Connect mappings for the color palette
 * in the Intelligent Design System Figma file.
 */

// Primary Color
export const PrimaryColorCode = () => (
  <div>
    <pre>{`<ds-color 
  color="#0066CC" 
  name="Primary" 
  size="md"
></ds-color>`}</pre>
  </div>
);

// Secondary Color
export const SecondaryColorCode = () => (
  <div>
    <pre>{`<ds-color 
  color="#f5f5f5" 
  name="Secondary" 
  size="md"
></ds-color>`}</pre>
  </div>
);

// Danger Color
export const DangerColorCode = () => (
  <div>
    <pre>{`<ds-color 
  color="#d32f2f" 
  name="Danger" 
  size="md"
></ds-color>`}</pre>
  </div>
);

// Success Color
export const SuccessColorCode = () => (
  <div>
    <pre>{`<ds-color 
  color="#388e3c" 
  name="Success" 
  size="md"
></ds-color>`}</pre>
  </div>
);

// Warning Color
export const WarningColorCode = () => (
  <div>
    <pre>{`<ds-color 
  color="#ffa726" 
  name="Warning" 
  size="md"
></ds-color>`}</pre>
  </div>
);

// Info Color
export const InfoColorCode = () => (
  <div>
    <pre>{`<ds-color 
  color="#29b6f6" 
  name="Info" 
  size="md"
></ds-color>`}</pre>
  </div>
);

/**
 * Color CSS Variables
 * 
 * Define these in your global CSS for consistent color usage
 */
export const ColorCSSVariables = `
:root {
  /* Primary Colors */
  --ds-color-primary: #0066CC;
  --ds-color-primary-light: #4da6ff;
  --ds-color-primary-dark: #004499;
  
  /* Secondary Colors */
  --ds-color-secondary: #f5f5f5;
  --ds-color-secondary-light: #ffffff;
  --ds-color-secondary-dark: #e0e0e0;
  
  /* Semantic Colors */
  --ds-color-success: #388e3c;
  --ds-color-warning: #ffa726;
  --ds-color-danger: #d32f2f;
  --ds-color-info: #29b6f6;
  
  /* Neutral Colors */
  --ds-color-neutral-0: #ffffff;
  --ds-color-neutral-50: #f9f9f9;
  --ds-color-neutral-100: #f5f5f5;
  --ds-color-neutral-200: #eeeeee;
  --ds-color-neutral-300: #e0e0e0;
  --ds-color-neutral-400: #bdbdbd;
  --ds-color-neutral-500: #9e9e9e;
  --ds-color-neutral-600: #757575;
  --ds-color-neutral-700: #616161;
  --ds-color-neutral-800: #424242;
  --ds-color-neutral-900: #212121;
  
  /* Text Colors */
  --ds-color-text-primary: #212121;
  --ds-color-text-secondary: #757575;
  --ds-color-text-disabled: #bdbdbd;
  --ds-color-text-inverse: #ffffff;
  
  /* Background Colors */
  --ds-color-background-primary: #ffffff;
  --ds-color-background-secondary: #f5f5f5;
  --ds-color-background-tertiary: #eeeeee;
}
`;

/**
 * Color Palette Organization
 * 
 * Your color system should be organized as:
 * 
 * 1. Primary Colors - Main brand colors
 * 2. Secondary Colors - Supporting colors
 * 3. Semantic Colors - Purpose-driven colors (success, warning, danger, info)
 * 4. Neutral Colors - Grays and neutrals for backgrounds and borders
 * 5. Text Colors - Specific text color variations
 * 6. Background Colors - Surface and background colors
 */

export const ColorOrganizationGuide = `
Color Palette Structure:

PRIMARY
  - Primary (#0066CC)
  - Primary Light (#4da6ff)
  - Primary Dark (#004499)

SECONDARY
  - Secondary (#f5f5f5)
  - Secondary Light (#ffffff)
  - Secondary Dark (#e0e0e0)

SEMANTIC
  - Success (#388e3c) - Positive actions, confirmations
  - Warning (#ffa726) - Cautions, alerts
  - Danger (#d32f2f) - Destructive actions, errors
  - Info (#29b6f6) - Information, hints

NEUTRAL
  - Neutral 0-900 (from white to near black)
  - Used for text, borders, backgrounds

TEXT
  - Text Primary - Main text color
  - Text Secondary - Secondary text (labels, hints)
  - Text Disabled - Disabled or inactive text
  - Text Inverse - Text on colored backgrounds

BACKGROUND
  - Background Primary - Main background
  - Background Secondary - Secondary background
  - Background Tertiary - Tertiary background
`;

/**
 * Color Usage Guidelines
 */
export const ColorUsageGuidelines = `
USAGE GUIDELINES:

Text Colors:
  - Use Text Primary for main content
  - Use Text Secondary for labels and secondary information
  - Use Text Disabled for disabled/inactive states
  - Ensure sufficient contrast (WCAG AA minimum 4.5:1 for text)

Background Colors:
  - Use Background Primary for main surfaces
  - Use Background Secondary for cards, sections, containers
  - Use Background Tertiary for hover/active states

Semantic Colors:
  - Use Success for positive confirmations
  - Use Warning for cautions and alerts
  - Use Danger for destructive actions
  - Use Info for informational messages

Accessibility:
  - Always check color contrast ratios
  - Don't rely solely on color to convey information
  - Provide patterns or icons in addition to color coding
  - Test with color blindness simulators
`;
