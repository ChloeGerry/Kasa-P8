import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Housing from './Pages/Housing/Housing';
import Error from './components/Error/Error-404';
import About from './Pages/About/About';

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
