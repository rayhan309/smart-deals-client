import Banner from "../Banner/Banner";
import LatestProducts from "../LatestProducts/LatestProducts";

const latestProductsPromiss = fetch('https://smart-deals-server-blond.vercel.app/latest-products').then(res => res.json());

const Home = () => {
    return (
        <div>
            <Banner />
            <LatestProducts latestProductsPromiss={latestProductsPromiss} />
        </div>
    );
};

export default Home;