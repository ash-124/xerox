import ProductView from "../components/Home/CenteredProductView/ProductView";
import NewArrivals from "../components/Home/NewArrivals";
import SliderBanner from "../components/Home/sliderBanner/SliderBanner";
import sliderImg1 from "../assets/sliderBanner1.webp"
import sliderImg2 from "../assets/sliderBanner2.jpg"
import CategoryCard from "../components/CategoryCard";


const Home = () => {
   const categoryJson = [
    {
      "id": 1,
      "name": "Polo",
      "image": "https://cdn.shopify.com/s/files/1/0566/0839/1368/files/Polo_1.jpg?v=1737117721"
    },
    {
      "id": 2,
      "name": "T-Shirt",
      "image": "https://cdn.shopify.com/s/files/1/0566/0839/1368/files/T-Shirts.jpg?v=1737117722"
    },
    {
      "id": 3,
      "name": "Jacket",
      "image": "https://cdn.shopify.com/s/files/1/0566/0839/1368/files/Jackets.jpg?v=1737117721"
    },
    {
      "id": 4,
      "name": "Shaket",
      "image": "https://cdn.shopify.com/s/files/1/0566/0839/1368/files/Size-Change_1.jpg?v=1741178906"
    }
  ]
  
    return (
        <div className="min-h-screen">
            <SliderBanner sliderImg1={sliderImg1} sliderImg2={sliderImg2} />
            <ProductView />
            <NewArrivals />
            <div className="h-screen">
                <SliderBanner sliderImg1={'https://overlaysnow.com/cdn/shop/files/ArticWavemobile.jpg?v=1743440309&width=1600'} sliderImg2={'https://overlaysnow.com/cdn/shop/files/A_Ride_to_Glory_Mobile_Banner_V2_866cfd3f-022a-4187-b410-4c28c51cb69e.jpg?v=1743440307&width=1600'} />
            </div>
            {/* category sections */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 justify-center items-center my-10 ">
            {categoryJson.map(category => <CategoryCard key={category.id} name={category.name} image={category.image}/>)}
            </div>

        </div>
    );
};

export default Home;