import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navigation from "./Components/Navigation";
import SignUp from "./Components/SignUp";
import Login from "./Components/Login";
import Home from "./Components/Home";
import Shop from "./Components/Shop";
import Product from "./Components/Product";
import AddToCart from "./Components/AddToCart";

const App = () => {
  const [data, setData] = useState([]);
  const fetchDetails = async() => {
    const response = await 
    fetch("https://fakestoreapi.com/products")
    const data = await response.json();
    setData(data)
  }
  useEffect(() => {
    fetchDetails()
  }, []);

  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Navigation />}>
            <Route index element={<Home />} />
            <Route path="shop" element={<Shop data={data}/>} />
            <Route path="product/:id" element={<Product />} />
            <Route path="addtocart/:id" element={<AddToCart />}/>
          </Route>
          <Route path="signup" element={<SignUp />} />
          <Route path="login" element={<Login />} />
        </Routes>
      </div>
    </>
  );
};
export default App;
