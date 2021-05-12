import { DefaultTheme } from 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    palette: {
      type: TColor;
      commom: {
        black: string;
        white: string;
        main: string;
      };
      primary: {
        main: string;
      };
      secondary: {
        main: string;
      };
      error: {
        main: string;
      };
      background: {
        body: string;
        app: string;
      };
      //  components: Components;
      grey: IGreyTheme;
      text: IText;
    };
    typography: {
      color: string;
      input: string;
    };
  }
}

type TColor = 'light' | 'dark';

interface IComponents {}

export interface IText {
  primary: string;
  secondary: string;
  disabled: string;
}

export interface IGreyTheme {
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
  A100: string;
  A200: string;
  A300: string;
  A400: string;
  A700: string;
}
