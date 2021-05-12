import { DefaultTheme } from 'styled-components';
import grey from './grey';

const light: DefaultTheme = {
  palette: {
    type: 'light',
    commom: {
      black: '#000',
      white: '#fff',
      main: '#51beff',
    },
    primary: {
      main: '#FF698A',
    },
    secondary: {
      main: '#FFDD6A',
    },
    error: {
      main: '#d0342a',
    },
    background: {
      body: grey[50],
      app: '#D2E8FE',
    },
    grey: grey,
    text: {
      primary: 'rgba(0, 0, 0, 0.87)',
      secondary: 'rgba(0, 0, 0, 0.54)',
      disabled: 'rgba(0, 0, 0, 0.38)',
    },
  },
  typography: {
    color: grey.A300,
    input: grey[700],
  },
};

export default light;
