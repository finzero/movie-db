import Layout from './components/Layout/Layout';
import Movies from './components/Movies/Movies';
import { Routes, Route } from 'react-router-dom';
import MovieDetail from './components/MovieDetail/MovieDetail';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Movies />} />
        <Route path=":movieId/:movieName" element={<MovieDetail />} />
      </Routes>
    </Layout>
  );
}

export default App;
