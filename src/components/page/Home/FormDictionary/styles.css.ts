import { style } from '@vanilla-extract/css';

export const formContainer = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '1em',
});

export const resultContainer = style({
  maxWidth: '500px',
  textAlign: 'center',
  marginTop: '1em',
});
