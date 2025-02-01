import { ThemeProvider } from 'styled-components';
import './App.css';
import AppRouter from './router/AppRouter';
import GlobalStyle from './style-components/GlobalStyle';
import tema from './style-components/Theme';
import { Provider } from 'react-redux';
import { store } from './store/configureStore';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={tema}>
        <div className="App">
          <GlobalStyle/>
          <AppRouter />
        </div>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
