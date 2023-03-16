import { Route, Routes } from 'react-router-dom';

import AppLayout from './Layouts/AppLayout';

function App() {
  return (
    <AppLayout>
      <Routes>
        <Route path="/" element={''} />
      </Routes>
    </AppLayout>
  );
}

export default App;
