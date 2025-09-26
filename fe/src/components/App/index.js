import { ThemeProvider } from 'styled-components';
import { useState } from 'react';

import GlobalStyles from '../../assets/styles/global';
import { theme as lightTheme, darkTheme } from "../../assets/styles/themes/default";

import Header from '../Header';

import { Container } from './styles'
import OrderList from '../OrderList';

function App() {
const [isDark,] = useState(true);

  return (
    //<ThemeProvider theme={isDark ? darkTheme : lightTheme }>
    <ThemeProvider theme={isDark ? darkTheme : lightTheme }>
      <GlobalStyles />

      <Container>

        <Header />
        <OrderList />
      </Container>


    </ThemeProvider>
  );

}

export default App;
