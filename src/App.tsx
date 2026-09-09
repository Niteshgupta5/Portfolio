import { HashRouter  } from 'react-router-dom';
import { AppRoutes } from './router';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import Navbar from './components/feature/Navbar';
import Footer from './components/feature/Footer';
import ScrollToTop from './components/feature/ScrollToTop';


function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <HashRouter basename={__BASE_PATH__}>
        <Navbar />
        <AppRoutes />
        <Footer />
        <ScrollToTop />
      </HashRouter>
    </I18nextProvider>
  );
}

export default App;