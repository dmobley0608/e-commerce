import { getProducts } from "@/api/controllers/productsController";
import ProductCard from "@/components/productCard/productCard";
import { prisma } from "@/db";

export default async function ProductsPage() {
    const products = await getProducts()
    return (
        <div >
            <h1>Products</h1>
            <div className="flex justify-start flex-wrap max-w-5xl mx-auto ">
                {products.map(product =>                   
                        <ProductCard key={product.id} product={product} />
                   )}
            </div>
        </div>
    );
}


