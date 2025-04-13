import ProductView from "../components/Home/CenteredProductView/ProductView";
import NewArrivals from "../components/Home/NewArrivals";
import SliderBanner from "../components/Home/sliderBanner/SliderBanner";
import sliderImg1 from "../assets/sliderBanner1.webp"
import sliderImg2 from "../assets/sliderBanner2.jpg"


const Home = () => {
    return (
        <div className="min-h-screen">
            <SliderBanner sliderImg1={sliderImg1} sliderImg2={sliderImg2} />
            <ProductView />
            <NewArrivals />
            <div className="h-screen">
                <SliderBanner sliderImg1={'https://overlaysnow.com/cdn/shop/files/ArticWavemobile.jpg?v=1743440309&width=1600'} sliderImg2={'https://overlaysnow.com/cdn/shop/files/A_Ride_to_Glory_Mobile_Banner_V2_866cfd3f-022a-4187-b410-4c28c51cb69e.jpg?v=1743440307&width=1600'} />
            </div>

        </div>
    );
};

export default Home;