import { vars } from 'nativewind';

export function setCSSVariables(colors: Record<string, string>) {
  console.log('Setting CSS variables with colors:', colors);
  // Update NativeWind theme variables with RGB values
  vars({
    '--primary': convertToRGB(colors.primary),
    '--secondary': convertToRGB(colors.secondary),
    '--background': convertToRGB(colors.background),
    '--surface': convertToRGB(colors.surface),
    '--text': convertToRGB(colors.text),
    '--text-secondary': convertToRGB(colors.textSecondary),
    '--border': convertToRGB(colors.border),
  });
}

// Helper function to convert hex to RGB
function convertToRGB(hex: string): string {
  // Remove the hash if it exists
  hex = hex.replace('#', '');
  
  // Convert hex to RGB
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  
  return `${r} ${g} ${b}`;
}
