import { Link } from "react-router-dom";
const Shop = ({ data }) => {
  return (
    <>
      <div className="flex flex-wrap justify-center items-center gap-8 p-8">
        {data.map((data) => (
          <Link to={`/product/${data.id}`}>
            <div className="w-64 border border-gray-200 bg-gray-100 shadow-lg rounded py-3 px-6 flex flex-col justify-center items-center">
              <img
                className="w-48 h-52"
                src={`${data.image}`}
                alt={`${data.title}`}
              />
              <p className="my-5 font-semibold mb-2 line-clamp-1">
                {data.title}
              </p>
              <p className="text-gray-700 text-base font-semibold">
                ${data.price}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};
export default Shop;
