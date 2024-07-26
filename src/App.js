import { BrowserRouter, Routes,Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import PageNotFound from "./components/PageNotFound";
import ProtectedRoute from "./components/ProtectedRoute";
import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";
import Products from "./components/Products";


function App() {
  return (
    <div className="App" >
      <BrowserRouter>
        <Routes>
          <Route path="/"  element={<Home />} />
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<ProtectedRoute> <Dashboard /></ProtectedRoute>} > 
            <Route path="profile" element={<ProtectedRoute> <Profile /></ProtectedRoute>} />
            <Route path="products" element={<ProtectedRoute> <Products /></ProtectedRoute>} />

          </Route>
          <Route path="*" element={<PageNotFound/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
