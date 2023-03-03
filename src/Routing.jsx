import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Housing from './Pages/Housing';
import Error from './components/Error';
import About from './Pages/About';

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/housing/id" element={<Housing />} />
      <Route path="/*" element={<Error />} />
    </Routes>
  );
};

export default Routing;
