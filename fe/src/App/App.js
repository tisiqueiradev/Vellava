import { ThemeProvider } from 'styled-components';

import GlobalStyles from '../App/assets/styles/global';
import DefaultTheme from '../App/assets/styles/themes/default';

function App() {
  return (
    <ThemeProvider theme={DefaultTheme}>
        <GlobalStyles />
        <h1>Olá mundo</h1>
    </ThemeProvider>
  );
}

export default App;
