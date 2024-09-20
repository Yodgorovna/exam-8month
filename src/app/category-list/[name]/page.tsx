import { ProductCard } from "@/components/productCard/ProductCard";
import { getCategoryByName } from "@/service/server/getCategoryByName";

const CategoryList = async ({ params }: any) => {
  const { name } = params;
  const category = await getCategoryByName(name);

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {category.map((categories) => (
          <ProductCard key={categories.id} {...categories} />
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
