import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navigation from "./Components/Navigation";
import SignUp from "./Components/SignUp";
import Login from "./Components/Login";
import Home from "./Components/Home";
import Shop from "./Components/Shop";

const App = () => {
  

  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Navigation />}>
            <Route index element={<Home />} />

            <Route path="shop" element={<Shop />} />
          </Route>
          <Route path="signup" element={<SignUp />} />
          <Route path="login" element={<Login />} />
        </Routes>
      </div>
    </>
  );
};
export default App;
