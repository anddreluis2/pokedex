import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import './App.css';

import { Home } from './pages/Home/Home';
import { List } from './pages/List/List';

function App() {
  return (
    <ChakraProvider>
      <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/list' element={<List />} />
      </Routes>
    </Router>
    </ChakraProvider>
  );
}

export default App;
