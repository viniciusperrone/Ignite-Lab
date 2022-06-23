import { Routes, Route } from 'react-router-dom';
import Event from './pages/Event';

function Router() {
  return (
    <Routes>
      <Route path="/" element={<h1>Viinicius</h1>} />
      <Route path="/event" element={<Event />} />
      <Route path="/event/lesson/:slug" element={<Event />} />
    </Routes>
  );
}

export default Router;
