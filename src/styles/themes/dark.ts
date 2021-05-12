import { DefaultTheme } from 'styled-components';
import grey from './grey';
import { darken, lighten } from 'polished';

const dark: DefaultTheme = {
  palette: {
    type: 'dark',
    commom: {
      black: '#000',
      white: '#fff',
      main: darken(0.15, '#51beff'),
    },
    primary: {
      main: '#FF698A',
    },
    secondary: {
      main: '#FFDD6A',
    },
    error: {
      main: lighten(0.15, '#d0342a'),
    },
    background: {
      body: grey.A400,
      app: darken(0.75, '#F4F4F4'),
    },
    grey,
    text: {
      primary: '#fff',
      secondary: 'rgba(255, 255, 255, 0.7)',
      disabled: 'rgba(255, 255, 255, 0.5)',
    },
  },
  typography: {
    color: grey[100],
    input: grey[100],
  },
};

export default dark;
