import { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import ThemeToggleProvider, {
  useThemeToggle,
} from '../src/contexts/themeToggleProvider';
import { CSSReset } from '../src/styles/reset';
import dark from '../src/styles/themes/dark';
import light from '../src/styles/themes/light';
import { Provider } from 'next-auth/client';
import type { AppProps } from 'next/app';

const App = ({ Component, pageProps }: AppProps) => {
  const { scheme } = useThemeToggle();
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement?.removeChild(jssStyles);
    }
  }, []);

  return (
    <Provider session={pageProps.session}>
      <ThemeToggleProvider initialSchema="light">
        <ThemeProvider theme={scheme === 'light' ? light : dark}>
          <CSSReset />

          <Component {...pageProps} />
        </ThemeProvider>
      </ThemeToggleProvider>
    </Provider>
  );
};

export default App;
