import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import TodoPage from './components/TodoPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/todo" element={<TodoPage />} />
      </Routes>
    </Router>
  );
};

export default App;