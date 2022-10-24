import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Error, Landing, Register } from './pages';
import { ToastContainer } from 'react-toastify';
import { AddJob, Alljobs, Dashboard, PrivateRoute, Profile, Stats } from './pages/dashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        >
          <Route index element={<Stats />} />
          <Route path="add-job" element={<AddJob />} />
          <Route path="all-jobs" element={<Alljobs />} />
          <Route path="profile" element={<Profile />} />
        </Route>
        <Route path="/landing" element={<Landing />} />
        <Route path="/Register" element={<Register />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
