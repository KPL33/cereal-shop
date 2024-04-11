// App.jsx
import { Routes, Route } from "react-router-dom";
import { AppProvider } from "./context/AppContext";

import Header from "./components/Header/Header";
import About from "./components/Main/About/About";
import Cart from "./components/Main/Cart/Cart";
import Contact from "./components/Main/Contact/Contact";
import Error from "./components/Main/Error/Error";
import History from "./components/Main/History/History";
import Login from "./components/Main/Login/Login";
import Products from "./components/Main/Products/Products";
import Signup from "./components/Main/Signup/Signup";
import Footer from "./components/Footer/Footer";

import "./app.css";

const App = () => {
  return (
    <AppProvider>
      <div className="app-wrapper">
        <Header />
        <div className="content-wrapper">
          <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/about" element={<About />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/error" element={<Error />} />
            <Route path="/history" element={<History />} />
            <Route path="/login" element={<Login />} />
            <Route path="/products" element={<Products />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </AppProvider>
  );
}

export default App;
