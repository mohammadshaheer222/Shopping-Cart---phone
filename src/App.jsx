import { useEffect } from "react";
import Navigation from "./Components/Navigation";
import SignUp from "./Components/SignUp";
import Login from "./Components/Login";

const App = () => {
//   const url = 'https://amazon-product-data6.p.rapidapi.com/product-by-text?keyword=iphone&page=1&country=US';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'b9412172c1msh51981e8b89020bdp107981jsn56afa8dc0afb',
// 		'X-RapidAPI-Host': 'amazon-product-data6.p.rapidapi.com'
// 	}
// };


//   const fetchData = async () => {
//     try {
//       const response = await fetch(url, options);
//       const result = await response.json();
//       console.log(result);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   useEffect(()=> {
//     fetchData();
//   },[])

  return (
    <>
      <div>
        <Navigation />
        <SignUp />
        <Login />
      </div>
    </>
  );
};
export default App;
