import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import "./App.css";
import Footer from "./Commen/Footer";
import { Provider } from "react-redux";
import { store } from "./Pages/Store";
import TopHeader from "./Commen/TopHeader";
import BottomHeader from "./Commen/BottomHeader";
import Header from "./Commen/Header";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import SinglePage from "./Pages/SingalPage";
import CategoryPage from "./Pages/Category";
import Checkout from "./Pages/Checkout";
import SearchResults from "./Pages/SearchResult";
import Help from "./Pages/Help";
import Faqs from "./Pages/Faqs";
import Privacy from "./Pages/Privacy";
import Terms from "./Pages/Terms";
import Products from "./Pages/Products";

function Base() {
  return (
    <>
      <TopHeader />
      <BottomHeader />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Base />}>
            <Route path="" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/singlePage/:id" element={<SinglePage />} />
            <Route path="/category/:category" element={<CategoryPage />} />
            <Route path="/Checkout" element={<Checkout />} />
            <Route path="/search/:searchQuery" element={<SearchResults />} />
            <Route path="/help" element={<Help />} />
            <Route path="/faqs" element={<Faqs />} />
            <Route path="/privacy" element={<Privacy/>}/>
            <Route path="/terms" element={<Terms/>}/>
            <Route path="/products" element={<Products/>}/>
          </Route>
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
