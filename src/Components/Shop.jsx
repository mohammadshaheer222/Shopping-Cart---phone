import { useEffect, useState } from "react";
const Shop = () => {
  const [data, setData] = useState([]);
  //   const url = 'https://amazon-product-data6.p.rapidapi.com/product-by-text?keyword=iphone&page=1&country=US';
  //   const options = {
  //       method: 'GET',
  //       headers: {
  //           'X-RapidAPI-Key': 'adfcca3eb3mshbdffa3e811c0bb0p1a5788jsn0ccc50ea05aa',
  //           'X-RapidAPI-Host': 'amazon-product-data6.p.rapidapi.com'
  //       }
  //   };

  //       const fetchData = async () => {

  // try {
  // 	const response = await fetch(url, options);
  // 	const result = await response.json();
  // 	console.log(result);
  //     setData(data)
  // } catch (error) {
  // 	console.error(error);
  // }
  //       };

  //       useEffect(()=> {
  //         fetchData();
  //       },[])
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  console.log(data);

  return (
    <>
      <div className="sm:flex sm:flex-row sm:justify-center sm:items-center sm:flex-wrap sm:p-4 md:flex md:flex-wrap md:flex-row md:justify-center md:items-center md:p-4">
        {data.map((data) => (
          <div key={data.id} className="p-5 sm:w-64 sm:h-80 sm:p-5 md:w-64 md:h-80 md:p-5">
            <div className="flex flex-col gap-3 bg-gray-100 justify-center items-center rounded overflow-hidden shadow-lg p-8">
              <div>
                <img
                  className="w-24 h-24"
                  src={`${data.image}`}
                  alt={`${data.title}`}
                />
              </div>

              <div className="px-6 py-4 flex flex-wrap p-4 ">
                <div className="font-bold mb-2 truncate">{data.title}</div>
              </div>
              <div>
                <p className="text-gray-700 text-base font-semibold">₹{data.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
export default Shop;
