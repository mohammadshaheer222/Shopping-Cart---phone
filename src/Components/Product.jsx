import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
const Product = () => {
  const params = useParams();
  const [details, setDetails] = useState([]);

  const fetchDetails = async () => {
    const response = await fetch(
      `https://fakestoreapi.com/products/${params.id}`
    );
    const data = await response.json();
    setDetails([data]);
  };
  useEffect(() => {
    fetchDetails();
  }, [params.id]);

  return (
    <>
      <div>
        {details.map((details) => (
          <div className="p-5 space-y-6">
            <div>
              <h1 className="text-xl font-semibold">{details.title}</h1>
              <p className="text-sm font-medium">{details.category}</p>
              <h2 className="font-semibold mt-3">${details.price}</h2>
              <p className="text-sm text-gray-500 font-medium">
                incl. of taxes <br />
                (Also includes all applicable duties)
              </p>
            </div>

            <div className="flex flex-col justify-center items-center gap-6">
              <img className="w-80 h-96 bg-gray-500" src={`${details.image}`} alt="" />
              <button className="btn btn-black p-2 w-full">Add to Cart</button> 
              <p className="text-sm">{details.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
export default Product;
