import { Route, Routes } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.min.css';

import './style/App.css';
import AppLayout from './layouts/AppLayout';
import Registration from './views/Registration';

function App() {
  return (
    <AppLayout>
      <Routes>
        <Route path="/" element={<Registration />} />
      </Routes>
    </AppLayout>
  );
}

export default App;
