import { useForm } from "react-hook-form";
import { useState } from "react";

const AddProductForm = () => {
    const { register, handleSubmit, reset } = useForm();
    const [submittedData, setSubmittedData] = useState(null);

    

    const onSubmit = (data) => {
        // Split and trim the color values
        const names = data.colorNames.split(",").map(name => name.trim());
        const hexes = data.hexCodes.split(",").map(hex => hex.trim());
      
        // Combine them into structured color objects
        const colors = names.map((name, index) => ({
          colorName: name,
          hexCode: hexes[index] || "#000000", // fallback if missing
        }));
      
        const finalData = {
          ...data,
          colors,
          availableSizes: data.availableSizes.split(",").map(s => s.trim()),
          tags: data.tags.split(",").map(tag => tag.trim()),
          createdAt: new Date().toISOString(),
        };
        setSubmittedData(finalData)
        console.log("Final formatted data:", finalData);
        reset();
      };
      

    return (
        <div className="flex justify-center items-center min-h-screen bg-base-200 p-4">
      <div className="card w-full max-w-4xl bg-white shadow-xl p-6">
        <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Name */}
          <div className="form-control">
            <label className="label">Name</label>
            <input type="text" {...register("name")} className="input input-bordered w-full" />
          </div>

          {/* Price */}
          <div className="form-control">
            <label className="label">Price</label>
            <input type="number" {...register("price")} className="input input-bordered w-full" />
          </div>

          {/* Category */}
          <div className="form-control">
            <label className="label">Category</label>
            <input type="text" {...register("category")} className="input input-bordered w-full" />
          </div>

          {/* Brand */}
          <div className="form-control">
            <label className="label">Brand</label>
            <input type="text" {...register("brand")} className="input input-bordered w-full" />
          </div>

          {/* Image URL */}
          <div className="form-control">
            <label className="label">Image URL</label>
            <input type="text" {...register("image")} className="input input-bordered w-full" />
          </div>

          {/* Sizes */}
          <div className="form-control">
            <label className="label">Available Sizes (comma-separated)</label>
            <input type="text" {...register("availableSizes")} className="input input-bordered w-full" />
          </div>

          {/* Color Names */}
          <div className="form-control">
            <label className="label">Color Names (comma-separated)</label>
            <input type="text" {...register("colorNames")} className="input input-bordered w-full" />
          </div>

          {/* Hex Codes */}
          <div className="form-control">
            <label className="label">Hex Codes (comma-separated)</label>
            <input type="text" {...register("hexCodes")} className="input input-bordered w-full" />
          </div>

          {/* Tags */}
          <div className="form-control md:col-span-2">
            <label className="label">Tags (e.g., summer, new arrival)</label>
            <input type="text" {...register("tags")} className="input input-bordered w-full" />
          </div>

          {/* Submit Button */}
          <div className="form-control md:col-span-2 mt-4">
            <button type="submit" className="btn btn-primary w-full">Add Product</button>
          </div>
        </form>
         {/* Preview Data */}
         {submittedData && (
                <div className="mt-6 p-4 bg-base-200 rounded">
                    <h3 className="text-lg font-semibold mb-2">Preview Data:</h3>
                    <pre className="text-sm whitespace-pre-wrap">{JSON.stringify(submittedData, null, 2)}</pre>
                </div>
            )}
      </div>
    </div>
    );
};

export default AddProductForm;
