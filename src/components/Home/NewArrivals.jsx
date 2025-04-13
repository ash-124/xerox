import { useQuery } from '@tanstack/react-query';
import ProductCard from '../AllProducts/ProductCard';
import axios from 'axios';

const NewArrivals = () => {
    const {data:allProducts} = useQuery({
        queryKey:["products"],
        queryFn:async()=>{
            const {data} = await axios.get(`${import.meta.env.VITE_API_URL}/products?allProducts=true`)
            return data
        }
    }) 
    console.log('Consoling from newArrivals', allProducts)
    return (
        <div className='my-20'>
            <h3 className='font-futura-semi-bold text-4xl py-10 text-center'>New Arrivals</h3>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center items-center px-10'>
            {allProducts?.map(product =><ProductCard key={product?.name} product={product}/>)}

            </div>
        </div>
    );
};

export default NewArrivals;