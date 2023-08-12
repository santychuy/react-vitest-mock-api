import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
  gap: '1em',
  maxWidth: '900px',
  marginInline: 'auto',
});

export const resultContainer = style({
  maxWidth: '500px',
  textAlign: 'center',
  marginTop: '1em',
});
