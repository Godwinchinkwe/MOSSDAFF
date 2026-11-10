import './App.css';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, useState, createContext, useContext } from 'react';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import { Home, About, Services, Business, WhyChooseUs, Approach, Blog, Contact } from './Pages/SitePages';

export const LanguageContext = createContext();
export const useLanguage = () => useContext(LanguageContext);

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
    const pageTitles = {
      '/': 'Mossdaff Investment, Ltd. | Japan–Nigeria Vehicle Sourcing',
      '/about': 'About Us | Mossdaff Investment, Ltd.',
      '/services': 'Our Services | Mossdaff Investment, Ltd.',
      '/business': 'Our Business | Mossdaff Investment, Ltd.',
      '/why-choose-us': 'Why Choose Us | Mossdaff Investment, Ltd.',
      '/approach': 'Our Approach | Mossdaff Investment, Ltd.',
      '/insights': 'News & Insights | Mossdaff Investment, Ltd.',
      '/contact': 'Contact | Mossdaff Investment, Ltd.'
    };
    document.title = pageTitles[pathname] || pageTitles['/'];
    const description = document.querySelector('meta[name="description"]');
    if (description) description.content = 'Mossdaff Investment, Ltd. connects Japanese vehicle sourcing and motor spare-parts procurement with customers and trade partners in Nigeria.';
  }, [pathname]);
  return null;
}

export default function App() {
  const [language, setLanguage] = useState('en');
  useEffect(() => { document.documentElement.lang = language === 'ja' ? 'ja' : 'en'; }, [language]);
  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      <BrowserRouter>
        <ScrollToTop />
        <div className="App">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/business" element={<Business />} />
              <Route path="/why-choose-us" element={<WhyChooseUs />} />
              <Route path="/approach" element={<Approach />} />
              <Route path="/insights" element={<Blog />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<Home />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </LanguageContext.Provider>
  );
}
