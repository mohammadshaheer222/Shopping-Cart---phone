import { Link } from "react-router-dom";
const Shop = ({ data }) => {
  return (
    <>
      <div className="flex flex-col items-center justify-center sm:flex sm:flex-row sm:justify-center sm:items-center sm:flex-wrap sm:p-4 md:flex md:flex-wrap md:flex-row md:justify-center md:items-center md:p-4">
        {data.map((data) => (
          <Link to={`/product/${data.id}`}>
            <div
              key={data.id}
              className="p-5 w-80 sm:w-64 sm:h-80 sm:p-5 md:w-64 md:h-80 md:p-5"
            >
              <div className="flex flex-col gap-3 bg-gray-100 justify-center items-center rounded overflow-hidden shadow-lg p-8 cursor-pointer active:bg-gray-200">
                <div>
                  <img
                    className="w-24 h-24"
                    src={`${data.image}`}
                    alt={`${data.title}`}
                  />
                </div>

                <div className="px-6 text-center py-4 flex flex-wrap ">
                  <h1 className="font-semibold mb-2 line-clamp-2">
                    {data.title}
                  </h1>
                </div>
                <div className="text-center ">
                  <p className="text-gray-700 text-base  font-semibold">
                    ₹{data.price}
                  </p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};
export default Shop;
