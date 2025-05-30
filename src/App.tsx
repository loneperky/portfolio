import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import ScrollToTop from './contexts/scroll';
import NotFound from './pages/NotFound';

function App() {
  return (
     
    <Routes>
     
       <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="blog" element={<Blog />} />
        <Route path="contact" element={<Contact />} />
        
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;