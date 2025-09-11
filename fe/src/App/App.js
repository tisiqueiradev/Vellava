import { ThemeProvider } from 'styled-components';
import { useState } from 'react';

import GlobalStyles from '../App/assets/styles/global';
import { theme as lightTheme, darkTheme } from "../App/assets/styles/themes/default";

function App() {
const [isDark, setIsDark] = useState(false);

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <GlobalStyles />
      <h1>Olá mundo</h1>
      <button onClick={() => setIsDark(!isDark)}>
        Alternar tema
      </button>
    </ThemeProvider>
  );

}

export default App;
