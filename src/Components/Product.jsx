import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
const Product = () => {
    const params = useParams();
    const [details, setDetails] = useState({})

    const fetchDetails = async() => {
        const response = await 
        fetch(`https://fakestoreapi.com/products/${params.id}`)
        const data = await response.json();
        setDetails(data)
        console.log(details,"hai")
      }
      useEffect(() => {
        fetchDetails()
      }, [params.id]);

    return(
        <>
            <div>
                <div>
                    <div className="text-center py-4">
                        <h1 className="text-2xl font-bold">{details.title}</h1>
                    </div>
                    <div className="w-screen px-10 py-2 ">
                        <img className="w-full h-64"  src={`${details.image}`} alt="" />
                    </div>
                    <div className="bg-gray-200 p-5 space-y-5">
                        <p className="text-base ">{details.description}</p>
                        <p className="text-xl font-bold">₹{details.price}</p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Product;