import Banner from "../Banner/Banner";
import LatestProducts from "../LatestProducts/LatestProducts";

const latestProductsPromiss = fetch('http://localhost:5000/latest-products').then(res => res.json());

const Home = () => {
    return (
        <div>
            <Banner />
            <LatestProducts latestProductsPromiss={latestProductsPromiss} />
        </div>
    );
};

export default Home;