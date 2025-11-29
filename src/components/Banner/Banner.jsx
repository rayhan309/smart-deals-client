import { IoSearchOutline } from "react-icons/io5";

const Banner = () => {
  return (
    <div className="min-h-[200px] bg-linear-to-t to-[#FFE6FD] from-[#E0F8F5] py-9">
      <h2 className="md:text-6xl text-4xl font-bold text-center">
        Deal your <span className="text-color">Products</span>
        <br /> in a <span className="text-color">Smart</span> way !
      </h2>
      <p className="font-medium text-gray-500 text-center mt-3">
        SmartDeals helps you sell, resell, and shop from trusted local sellers —
        all in one place!
      </p>
      <div className="flex justify-center mt-4">
        <div className="join ">
          <input
            className="input join-item md:w-[400px] text-xs"
            placeholder="search For Products, Categoriees..."
          />
          <div className="relative">
            <IoSearchOutline className="absolute top-3 left-4 text-white" />
            <button className="btn join-item rounded-r-full bg-gradient-to-r from-[#632EE3] to-[#9F62F2] w-14"></button>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center gap-4 mt-5">
        <button className="btn-primar">Watch All Products</button>
        <button className="btn btn-outline btn-primary">Post an Product</button>
      </div>
    </div>
  );
};

export default Banner;
