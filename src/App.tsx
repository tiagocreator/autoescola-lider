import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';

import { Home, About, Services, Reviews, Contact } from './pages';
import { Navbar, Footer } from './components';

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/sobre' element={<About />} />
          <Route path='/servicos' element={<Services />} />
          <Route path='/avaliacoes' element={<Reviews />} />
          <Route path='/contato' element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </ChakraProvider>
  );
}

export default App;
