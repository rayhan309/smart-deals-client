import { Link } from "react-router";

const ProductCard = ({ product }) => {
  const { _id, title, condition, price_min, price_max } = product;
  return (
    <div className="bg-white p-3 rounded-lg shadow-xl">
      <div>
        <img
        className="rounded-lg"
          src={
            "https://amateurphotographer.com/wp-content/uploads/sites/7/2024/03/Samsung_S24_02.jpeg?resize=900,600"
          }
          alt={title}
        />
      </div>
      <div>
        <h2 className="font-semibold py-2">{title}   [ {condition} ]</h2>
        <h2 className="text-primary font-medium">$ {price_min} - {price_max}</h2>
      </div>
      <Link to={`/product-ditails/${_id}`} className="btn btn-outline btn-primary w-full mt-3">View Ditails</Link>
    </div>
  );
};

export default ProductCard;
