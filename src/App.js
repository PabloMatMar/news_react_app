import Header from './components/Header'
import Footer from './components/Footer';
import Main from './components/Main';
import { userContext } from './context/userContext';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <userContext.Provider>
          <Header />
          <Main />
        </userContext.Provider>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
