import { Link, useLoaderData } from "react-router";
import { FaArrowLeft } from "react-icons/fa";
import { use, useEffect, useRef, useState } from "react";
import { AuthContext } from "../../Context/AuthContext";
import Swal from "sweetalert2";

const ProductDitails = () => {
  const product = useLoaderData();
  const modaleRef = useRef(null);
  const { user } = use(AuthContext);
  const [bids, setBids] = useState([]);

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

  useEffect(() => {
    fetch(`https://smart-deals-server-blond.vercel.app/bids/byProducts/${_id}`)
      .then((res) => res.json())
      .then((data) => {
        setBids(data);
      });
  }, [_id]);

  // handle modale
  const handleModale = () => {
    modaleRef.current.showModal();
  };

  const handleModaleSubmite = (e) => {
    e.preventDefault();

    const ammount = e.target.ammount.value;
    const email = user?.email;
    const name = user?.displayName;
    const photo = user?.photoURL;

    const newBid = {
      product: _id,
      buyer_name: name,
      buyer_email: email,
      buyer_image: photo,
      bid_price: ammount,
      status: "pending",
    };

    fetch("https://smart-deals-server-blond.vercel.app/bids", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newBid),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.insertedId) {
          modaleRef.current.close();
          newBid._id = data?.insertedId;
          setBids([...bids, newBid]);

          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your Bid has been Assest!",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
 
  return (
    <>
      <div className="w-11/12 mx-auto p-4 md:p-6">
        {/* my modale */}
        {/* Open the modal using document.getElementById('ID').showModal() method */}
        <dialog ref={modaleRef} className="modal modal-bottom sm:modal-middle">
          <div className="modal-box">
            <h3 className="font-bold text-lg">
              Give Seller Your Offered Price!
            </h3>
            <form onSubmit={handleModaleSubmite}>
              <fieldset className="fieldset">
                {/* name */}
                <label className="label">Name</label>
                <input
                  type="text"
                  className="input w-full"
                  defaultValue={user?.displayName}
                  readOnly
                />

                {/* email */}
                <label className="label">Email</label>
                <input
                  type="email"
                  className="input w-full"
                  defaultValue={user?.email}
                  readOnly
                />

                {/* bid price */}
                <label className="label">Place your Price</label>
                <input
                  type="text"
                  name="ammount"
                  className="input w-full"
                  placeholder="Your Price"
                  required
                />

                <button className="btn btn-primar mt-4">Submit Bid!</button>
              </fieldset>
              -
            </form>
            <div className="modal-action">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn btn-outline btn-primary">Cancle</button>
              </form>
            </div>
          </div>
        </dialog>
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
              <h3 className="text-xl font-semibold mb-4">
                Product Description
              </h3>

              <div className="flex flex-wrap justify-between text-sm mb-3">
                <p>
                  <span className="font-semibold">
                    <span className="text-color">Condition:</span>
                  </span>{" "}
                  {condition}
                </p>
                <p>
                  <span className="font-semibold">
                    <span className="text-color">Usage Time:</span>
                  </span>{" "}
                  {usage}
                </p>
              </div>

              <div className="mb-3 border-b w-full"></div>

              <p className="text-gray-600 leading-relaxed">
                {description} ipsum dolor sit amet, consectetur adipisicing
                elit. Optio molestias maiores provident quia fugit iure dolorum
                facere. Nisi voluptas minus iste illo sunt dolorum debitis quo
                dolores velit! Officiis ad doloremque temporibus in commodi
                beatae ipsa facere ratione recusandae cumque.
              </p>
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
            <button
              onClick={handleModale}
              className="btn w-full bg-gradient-to-r from-purple-600 to-indigo-500 text-white"
            >
              I Want Buy This Product
            </button>
          </div>
        </div>
      </div>

      <div className="w-11/12 mx-auto p-4 md:p-6 mb-10">
        <h1 className="text-4xl font-bold">
          Bids For This Products:{" "}
          <span className="text-color">{bids.length}</span>
        </h1>

        {bids.length === 0 ? (
          ""
        ) : (
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>SL No.</th>
                  <th>buyer_name</th>
                  <th>buyar_email</th>
                  <th>Bid Price</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                {bids.sort((a, b) => b.bid_price - a.bid_price).map((bid, index) => (
                  <tr key={bid._id}>
                    <th>{index + 1}</th>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle h-12 w-12">
                            <img
                              src={
                                bid?.buyer_image
                              }
                              alt={bid?.buyer_name}
                            />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">{bid?.buyer_name}</div>
                          <div className="text-sm opacity-50">
                            United States
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>{bid?.buyer_email}</td>
                    <td>$ {bid?.bid_price}</td>
                    <th>
                      <button className="btn btn-ghost btn-xs">details</button>
                    </th>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </>
  );
};

export default ProductDitails;
