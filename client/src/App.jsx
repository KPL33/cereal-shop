import { Routes, Route } from "react-router-dom";
import { AppProvider } from "./context/AppContext";
import useAppContext from "./context/useAppContext";

import Header from "./components/Header/Header";
import About from "./components/Main/About/About";
import Cart from "./components/Main/Cart/Cart";
import Contact from "./components/Main/Contact/Contact";
import Error from "./components/Main/Error/Error";
import Footer from "./components/Footer/Footer";
import History from "./components/Main/History/History";
import Login from "./components/Main/Login/Login";
import Products from "./components/Main/Products/Products";
import Profile from "./components/Main/Profile/Profile";
import Signup from "./components/Main/Signup/Signup";
import ProtectedRoute from "./components/ProtectedRoute";

import "./app.css";

const App = () => {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
};

const AppContent = () => {
  const { loggedIn, signoutClicked } = useAppContext();

  return (
    <div className="app-wrapper">
      <Header />
      <main className="page">
        <div className="logged-in-out-container">
          {loggedIn && !signoutClicked && (
            <div className="logged-in-out">
              <h3 className="logged-in-out-message">You are now logged in!</h3>
            </div>
          )}
          {signoutClicked && (
            <div className="logged-in-out">
              <h3 className="logged-in-out-message">You are now signed out!</h3>
            </div>
          )}
        </div>
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/error" element={<Error />} />
          <Route path="/login" element={<Login />} />
          <Route path="/products" element={<Products />} />
          <Route path="/signup" element={<Signup />} />

          {/* Private routes */}
          <Route path="/cart" element={<ProtectedRoute element={<Cart />} />} />
          <Route
            path="/history"
            element={<ProtectedRoute element={<History />} />}
          />
          <Route
            path="/profile"
            element={<ProtectedRoute element={<Profile />} />}
          />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
