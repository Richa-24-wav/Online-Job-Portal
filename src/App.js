import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./app/components/ProtectedRoute";
import routes from "./config/route.config";
import "./styles/utilities.css";
import "./styles/app.css";
import { LOCAL_STORAGE_KEYS } from "./app/constants/commonConstants";
import users from "./MOCK_DATA/users";

const setUsers = () => {
  localStorage.setItem(LOCAL_STORAGE_KEYS.USERS, JSON.stringify(users));
}

const setJobs = () => {

}

const initializeApp = () => {
  setUsers();
  setJobs();
}

function App() {
  initializeApp();
  return (
    <BrowserRouter>
      <Routes>
        {routes.map(({ exact, path, component, id, isProtected }) => (
          <Route
            exact={exact}
            path={path}
            element={
              isProtected ? (
                <ProtectedRoute redirectTo="/login">{component}</ProtectedRoute>
              ) : (
                component
              )
            }
            key={id}
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
