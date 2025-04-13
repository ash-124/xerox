
const CategoryCard = ({ image, name }) => {
  return (
    <div className=" h-44 rounded-xl overflow-hidden relative shadow-lg">
      <img src={image} alt={name} className="w-full h-full object-cover" />
      <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white text-lg font-semibold px-4 py-2">
        {name}
      </div>
    </div>
  );
};

export default CategoryCard;
