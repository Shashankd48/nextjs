"use server";

import env from "@/config/env";
import { revalidateTag } from "next/cache";

export const addProduct = async (event: FormData) => {
   const name = event.get("name")?.toString();
   const price = event.get("price")?.toString();

   if (!name || !price) return;

   const newProduct = {
      name,
      price,
   };

   await fetch(`${env.baseURL}/products`, {
      method: "POST",
      body: JSON.stringify(newProduct),
      headers: {
         "Content-Type": "application/json",
      },
   });

   revalidateTag("products");
};

export const removeProduct = async (id: string) => {
   if (!id) return;

   await fetch(`${env.baseURL}/products/${id}`, {
      method: "DELETE",
   });

   revalidateTag("products");
};
