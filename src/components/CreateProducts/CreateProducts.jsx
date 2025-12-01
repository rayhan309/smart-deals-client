import { use, useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { IoArrowBack } from "react-icons/io5";
import { Link, useNavigate } from "react-router";
import Swal from "sweetalert2";
import { AuthContext } from "../../Context/AuthContext";
import useAxiosSequre from "../../Hooks/useAuthAxios";

export default function CreateProducts() {
  const [condition, setCondition] = useState("brand");
  const navigate = useNavigate();
  const { user } = use(AuthContext);
  const [category, setCategory] = useState("");
  const axiosSequre = useAxiosSequre();

  const handleSubmit = (e) => {
    e.preventDefault();

    const from = e.target;
    const title = from.title.value;
    const min_price = from.min_price.value;
    const max_price = from.max_price.value;
    const useTime = from.useTime.value;
    const productImage = from.productImage.value;
    const sellerName = from.sellerName.value;
    const sellerEmail = from.sellerEmail.value;
    const sellerContact = from.sellerContact.value;
    const sellerImage = from.sellerImage.value;
    const sellerLocation = from.sellerLocation.value;
    const description = from.description.value;
    const nowTime = new Date().toISOString();
  
    const newProduct = {
      title: title,
      price_min: min_price,
      price_max: max_price,
      email: sellerEmail,
      category: category,
      created_at: nowTime,
      image: productImage,
      status: "sold",
      location: sellerLocation,
      seller_image: sellerImage,
      seller_name: sellerName,
      condition: condition,
      usage: useTime,
      description: description,
      seller_contact: sellerContact,
    };

    axiosSequre.post("/products", newProduct).then((data) => {
      // console.log(data.data.insertedId);
      if (data.data.insertedId) {
        Swal.fire({
          title: "Product Created!",
          icon: "success",
          confirmButtonColor: "#6A5AE0",
        });
      }
    });
  };

  return (
    <div className="max-w-4xl mx-auto py-12">
      <h1 className="text-4xl font-bold text-center mb-10">
        Create <span className="text-color">A Product</span>
      </h1>

      <div className="mb-6">
        <Link
          onClick={() => navigate(-1)}
          className="text-sm text-gray-600 hover:underline flex gap-1.5 items-center"
        >
          <IoArrowBack /> Back To Products
        </Link>
      </div>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-xl rounded-2xl p-8 grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {/* Title */}
        <div className="col-span-1 flex flex-col">
          <label className="text-sm font-semibold mb-1">Title</label>
          <input
            name="title"
            type="text"
            placeholder="e.g. Yamaha Fz Guitar for Sale"
            className="input input-bordered w-full"
            required
          />
        </div>

        {/* Category */}
        <div className="col-span-1 flex flex-col">
          <label className="text-sm font-semibold mb-1">Category</label>
          <div className="relative">
            <select
              onChange={(e) => setCategory(e.target.value)}
              className="select select-bordered w-full appearance-none"
            >
              <option>Select a Category</option>
              <option>Electronics</option>
              <option>Furniture</option>
              <option>Vehicles</option>
              <option>Gadgets</option>
            </select>
            <FiChevronDown className="absolute right-3 top-3 text-xl text-gray-500" />
          </div>
        </div>

        {/* Min Price */}
        <div className="col-span-1 flex flex-col">
          <label className="text-sm font-semibold mb-1">
            Min Price You want to Sale ($)
          </label>
          <input
            type="number"
            name="min_price"
            className="input input-bordered w-full"
            placeholder="e.g. 18.5"
            required
          />
        </div>

        {/* Max Price */}
        <div className="col-span-1 flex flex-col">
          <label className="text-sm font-semibold mb-1">
            Max Price You want to Sale ($)
          </label>
          <input
            type="number"
            name="max_price"
            className="input input-bordered w-full"
            placeholder="Optional (default = Min Price)"
          />
        </div>

        {/* Condition */}
        <div className="col-span-1 flex flex-col">
          <label className="text-sm font-semibold mb-2">
            Product Condition
          </label>
          <div className="flex items-center gap-6">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="condition"
                className="radio radio-primary"
                checked={condition === "brand"}
                onChange={() => setCondition("brand")}
              />
              Brand New
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="condition"
                className="radio radio-primary"
                checked={condition === "used"}
                onChange={() => setCondition("used")}
              />
              Used
            </label>
          </div>
        </div>

        {/* Usage Time */}
        <div className="flex flex-col">
          <label className="text-sm font-semibold mb-1">
            Product Usage time
          </label>
          <input
            type="text"
            name="useTime"
            className="input input-bordered w-full"
            placeholder="e.g. 1 year 3 month"
          />
        </div>

        {/* Product Image URL */}
        <div className="col-span-2 flex flex-col">
          <label className="text-sm font-semibold mb-1">
            Your Product Image URL
          </label>
          <input
            type="text"
            name="productImage"
            className="input input-bordered w-full"
            placeholder="https://..."
          />
        </div>

        {/* Seller Name */}
        <div className="flex flex-col">
          <label className="text-sm font-semibold mb-1">Seller Name</label>
          <input
            type="text"
            name="sellerName"
            className="input input-bordered w-full"
            placeholder="e.g. Artisan Roasters"
            required
          />
        </div>

        {/* Seller Email */}
        <div className="flex flex-col">
          <label className="text-sm font-semibold mb-1">Seller Email</label>
          <input
            type="email"
            name="sellerEmail"
            className="input input-bordered w-full"
            defaultValue={user?.email}
            readOnly
          />
        </div>

        {/* Contact */}
        <div className="flex flex-col">
          <label className="text-sm font-semibold mb-1">Seller Contact</label>
          <input
            type="text"
            name="sellerContact"
            className="input input-bordered w-full"
            placeholder="e.g. +1-555-1234"
            required
          />
        </div>

        {/* Seller Image URL */}
        <div className="flex flex-col">
          <label className="text-sm font-semibold mb-1">Seller Image URL</label>
          <input
            type="text"
            name="sellerImage"
            className="input input-bordered w-full"
            placeholder="https://..."
          />
        </div>

        {/* Location */}
        <div className="col-span-2 flex flex-col">
          <label className="text-sm font-semibold mb-1">Location</label>
          <input
            type="text"
            name="sellerLocation"
            className="input input-bordered w-full"
            placeholder="City, Country"
          />
        </div>

        {/* Description */}
        <div className="col-span-2 flex flex-col">
          <label className="text-sm font-semibold mb-1">
            Simple Description about your Product
          </label>
          <textarea
            name="description"
            className="textarea textarea-bordered w-full h-28"
            placeholder="e.g. I bought this product 3 month ago..."
          ></textarea>
        </div>

        <div className="col-span-2 pt-4">
          <button className="btn w-full bg-gradient-to-r from-purple-500 to-purple-700 text-white text-lg">
            Create A Product
          </button>
        </div>
      </form>
    </div>
  );
}
