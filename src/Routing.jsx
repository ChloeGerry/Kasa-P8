import { Route, Routes, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Home from './Pages/Home';
import Housing from './Pages/Housing';
import Error from './components/Error';
import About from './Pages/About';

const Routing = () => {
  let { userId } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/data.json')
      .then((result) => result.json())
      .then((data) => setData(data))
      .catch((error) => console.log(error));
  }, []);

  userId = data;

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {userId.map(({ id }) => (
        <Route key={id} path={`/housing/:${id}`} element={<Housing />} />
      ))}
      <Route path="/about" element={<About />} />
      <Route path="/*" element={<Error />} />
    </Routes>
  );
};

export default Routing;
