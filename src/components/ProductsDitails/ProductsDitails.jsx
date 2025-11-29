import { Link, useLoaderData } from "react-router";
import { FaArrowLeft } from "react-icons/fa";

const ProductDitails = () => {
  const product = useLoaderData();
  console.log(product);
  const {
    _id,
    title,
    price_min,
    price_max,
    category,
    created_at,
    // image,
    status,
    location,
    // seller_image,
    seller_name,
    email,
    condition,
    usage,
    description,
    seller_contact,
  } = product || {};

  return (
    <div className="max-w-6xl mx-auto p-4 md:p-6">
      {/* Back Button */}
      <Link
        to="/"
        className="flex items-center gap-2 text-gray-700 hover:text-black mb-3"
      >
        <FaArrowLeft /> Back To Products
      </Link>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Left = Product Image */}
        <div className="w-full rounded-lg overflow-hidden">
          <img
            src={
              "https://amateurphotographer.com/wp-content/uploads/sites/7/2024/03/Samsung_S24_02.jpeg?resize=900,600"
            }
            alt={title}
            className="w-full h-[60%] object-cover"
          />
          
          {/* Description */}
          <div className="mt-7 rounded-xl px-4">
            <h3 className="text-xl font-semibold mb-4">Product Description</h3>

            <div className="flex flex-wrap justify-between text-sm mb-3">
              <p>
                <span className="font-semibold"><span className="text-color">Condition:</span></span> {condition}
              </p>
              <p>
                <span className="font-semibold"><span className="text-color">Usage Time:</span></span> {usage}
              </p>
            </div>

            <div className="mb-3 border-b w-full"></div>

            <p className="text-gray-600 leading-relaxed">{description} ipsum dolor sit amet, consectetur adipisicing elit. Optio molestias maiores provident quia fugit iure dolorum facere. Nisi voluptas minus iste illo sunt dolorum debitis quo dolores velit! Officiis ad doloremque temporibus in commodi beatae ipsa facere ratione recusandae cumque.</p>
          </div>
        </div>

        {/* Right Side */}
        <div>
          <h1 className="text-3xl font-bold mb-2">{title}</h1>

          {/* Category Tag */}
          <div className="badge bg-[#632EE330] text-[#632EE3] mb-4">
            {category}
          </div>

          {/* Price */}
          <div className="p-4 rounded-xl mb-4 bg-white">
            <h2 className="text-green-600 text-2xl font-bold">
              ${price_min} - {price_max}
            </h2>
            <p className="text-sm text-gray-500">Price starts from</p>
          </div>

          {/* Product Details */}
          <div className="p-4 bg-white rounded-xl mb-4">
            <h3 className="font-semibold text-lg mb-2">Product Details</h3>
            <p>
              <span className="font-semibold">Product ID:</span> {_id}
            </p>
            <p>
              <span className="font-semibold">Posted:</span> {created_at}
            </p>
          </div>

          {/* Seller Info */}
          <div className="p-4 bg-white rounded-xl mb-4">
            <h3 className="font-semibold text-lg mb-3">Seller Information</h3>

            <div className="flex items-center gap-3 mb-3">
              <img
                // src={seller_image}
                src={
                  "https://amateurphotographer.com/wp-content/uploads/sites/7/2024/03/Samsung_S24_02.jpeg?resize=900,600"
                }
                alt={seller_name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h4 className="font-semibold">{seller_name}</h4>
                <p className="text-sm text-gray-500">{email}</p>
              </div>
            </div>

            <p>
              <span className="font-semibold">Location:</span> {location}
            </p>
            <p>
              <span className="font-semibold">Contact:</span> {seller_contact}
            </p>

            <div className="mt-2">
              <span className="badge badge-warning">{status}</span>
            </div>
          </div>

          {/* Buy Button */}
          <button className="btn w-full bg-gradient-to-r from-purple-600 to-indigo-500 text-white">
            I Want Buy This Product
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDitails;
