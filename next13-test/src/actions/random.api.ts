export type UserRepository = {
   name: {
      title: string;
      first: string;
      last: string;
   };
};
export const getRandomUserISR = async () => {
   const res = await fetch("https://randomuser.me/api", {
      next: {
         revalidate: 10,
      },
   });

   const data = await res.json();

   return { name: data.results[0].name };
};

export const getRandomUserNoCache = async () => {
   const res = await fetch("https://randomuser.me/api", {
      cache: "no-store",
   });

   const data = await res.json();

   return { name: data.results[0].name };
};

export const getRandomUserCached = async () => {
   const res = await fetch("https://randomuser.me/api");

   const data = await res.json();

   return { name: data.results[0].name };
};
