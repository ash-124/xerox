import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import LoadingSpinner from "../components/LoadingSpinner";
import ProductCard from "../components/AllProducts/ProductCard";

const AllProductPage = () => {
    const {data:allProducts, isLoading} = useQuery({
        queryKey:["Products"],
        queryFn:async()=>{
            const {data} = await axios.get(`${import.meta.env.VITE_API_URL}/products?allProducts=true`)
            return data
        }
    })
    if(isLoading){
        return <div className="text-center py-10"><LoadingSpinner/></div>}
    return (
        <div className="text-4xl">
           Products on inventory {allProducts?.length}
           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 w-11/12 mx-auto py-10">
            {allProducts.map((product)=><ProductCard key={product?._id} product={product}/>)}
           </div>
        </div>
    );
};

export default AllProductPage;