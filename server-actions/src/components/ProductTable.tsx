"use client";

import { useTransition, useState, useEffect } from "react";
import env from "@/config/env";
import { ProductRepository } from "@/typings";
import { revalidateTag } from "next/cache";
import { removeProduct } from "@/actions/serverActions";
interface IProps {
   products: ProductRepository[] | [];
}

const ProductTable = ({ products }: IProps) => {
   const [isPending, startTransition] = useTransition();
   const [id, setId] = useState<string | null>(null);

   useEffect(() => {
      console.log("log: ", id);
   }, [id]);

   return (
      <div className="flex flex-col">
         <div className="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
            <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
               <div className="overflow-hidden">
                  <table className="min-w-full">
                     <thead className="bg-gray-200 border-b">
                        <tr>
                           <th
                              scope="col"
                              className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                           >
                              # Id
                           </th>
                           <th
                              scope="col"
                              className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                           >
                              Product Name
                           </th>
                           <th
                              scope="col"
                              className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                           >
                              Price
                           </th>
                           <th></th>
                        </tr>
                     </thead>
                     <tbody className="h-28 overflow-y-scroll">
                        {products.map((product) => (
                           <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                 {product.id}
                              </td>
                              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                 {product.name}
                              </td>
                              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                 {product.price} $
                              </td>
                              <td>
                                 <button
                                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                    onClick={() =>
                                       startTransition(() =>
                                          removeProduct(product.id)
                                       )
                                    }
                                 >
                                    {isPending && id === product.id
                                       ? "Deleting..."
                                       : "Delete"}
                                 </button>
                              </td>
                           </tr>
                        ))}
                     </tbody>
                  </table>
               </div>
            </div>
         </div>
      </div>
   );
};

export default ProductTable;
