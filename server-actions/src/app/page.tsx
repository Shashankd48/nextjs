import { addProduct } from "@/actions/serverActions";
import ProductTable from "@/components/ProductTable";
import env from "@/config/env";
import { ProductRepository } from "@/typings";

export default async function Home() {
   const res = await fetch(`${env.baseURL}/products`, {
      cache: "no-cache",
      next: {
         tags: ["products"],
      },
   });

   const products: ProductRepository[] = await res.json();

   return (
      <main className="min-h-screen p-24">
         <div className="my-2">
            <h2 className="text-xl">Main landing page</h2>
         </div>

         <div className="w-full max-w-sm">
            <form
               action={addProduct}
               className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
            >
               <div className="mb-4">
                  <label
                     className="block text-gray-700 text-sm font-bold mb-2"
                     htmlFor="name"
                  >
                     Product Name
                  </label>
                  <input
                     className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                     name="name"
                     type="text"
                     placeholder="Macbook pro m2"
                  />
               </div>

               <div className="mb-4">
                  <label
                     className="block text-gray-700 text-sm font-bold mb-2"
                     htmlFor="price"
                  >
                     Product Price
                  </label>
                  <input
                     className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                     name="price"
                     type="number"
                     placeholder="22999.99 Rs"
                  />
               </div>

               <div className="flex items-center justify-between">
                  <button
                     className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                     type="submit"
                  >
                     Add product
                  </button>
               </div>
            </form>
         </div>

         <ProductTable products={products} />
      </main>
   );
}
