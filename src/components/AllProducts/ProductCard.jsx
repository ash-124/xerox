import { FaExternalLinkAlt } from "react-icons/fa";

const ProductCard = ({ product }) => {
    const {
        name,
        image,
        price,
        brand,
        discountPrice, // Optional key
    } = product;

    const isDiscounted = !!discountPrice;
    const discountPercentage = isDiscounted
        ? Math.round(((price - discountPrice) / price) * 100)
        : 0;

    return (
        <div className="border rounded-md overflow-hidden shadow-sm relative group">
            {/* Discount Badge */}
            {isDiscounted && (
                <div className="absolute top-2 left-2 bg-orange-500 text-white text-xs font-bold px-2 py-1 z-10">
                    SAVE {discountPercentage}%
                </div>
            )}

            {/* Product Image */}
            <div className="relative w-full aspect-[3/4] overflow-hidden">
                <img
                    src={image}
                    alt={name}
                    className="w-full h-full object-cover group-hover:scale-105 transition"
                />

                {/* Hover Icon */}
                <div className="absolute inset-0 flex justify-center items-center bg-white bg-opacity-70 opacity-0 group-hover:opacity-100 transition">
                    <FaExternalLinkAlt className="text-xl" />
                </div>
            </div>

            {/* Product Info */}
            <div className="p-3 text-center">
                <h2 className="text-base font-semibold">{name}</h2>
                <p className="text-sm text-gray-500 mb-1">{brand}</p>

                {/* Pricing */}
                <div className="text-lg font-bold">
                    {isDiscounted ? (
                        <>
                            <span className="text-orange-500">₹ {discountPrice}</span>
                            <span className="ml-2 text-gray-400 line-through text-sm">
                                ₹ {price}
                            </span>
                        </>
                    ) : (
                        <span>₹ {price}</span>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
