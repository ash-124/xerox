import ProductView from "../components/Home/CenteredProductView/ProductView";
import SliderBanner from "../components/Home/sliderBanner/SliderBanner";


const Home = () => {
    return (
        <div className="min-h-screen">
            <SliderBanner/>
            <ProductView/>

        </div>
    );
};

export default Home;