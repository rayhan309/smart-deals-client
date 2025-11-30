import { useLoaderData } from "react-router";
import ProductCard from "../ProductCard/ProductCard";

const AllProduct = () => {
  const products = useLoaderData();
  console.log(products);
  return (
   <div className="max-w-11/12 mx-auto mt-6">
        <h3 className="text-5xl font-bold text-center py-5">All <span className="text-color">Products</span></h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <ProductCard key={product?._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default AllProduct;
