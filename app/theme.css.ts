import { createGlobalTheme, createGlobalThemeContract, globalStyle } from '@vanilla-extract/css';

export const vars = createGlobalThemeContract({
  color: { bg: 'color-bg', fg: 'color-fg', accent: 'color-accent' },
  space: { sm: 'space-sm', md: 'space-md' },
});

createGlobalTheme(':root', vars, {
  color: { bg: '#ffffff', fg: '#111827', accent: '#2563eb' },
  space: { sm: '8px', md: '16px' },
});

globalStyle(':root', {
  '@media': {
    '(prefers-color-scheme: dark)': {
      vars: {
        [vars.color.bg]: '#0b1020',
        [vars.color.fg]: '#e5e7eb',
        [vars.color.accent]: '#60a5fa',
      },
    },
  },
});

globalStyle('body', {
  margin: 0,
  backgroundColor: vars.color.bg,
  color: vars.color.fg,
  fontFamily: 'system-ui, sans-serif',
});
