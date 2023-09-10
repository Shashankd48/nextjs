import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import {
   getRandomUserCached,
   getRandomUserNoCache,
} from "@/actions/random.api";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
   title: "Next 13 Example",
   description: "Generated by create next app",
};

export default async function RootLayout({
   children,
}: {
   children: React.ReactNode;
}) {
   const [cachedUser, noCachedUser] = await Promise.all([
      getRandomUserCached(),
      getRandomUserNoCache(),
   ]);

   return (
      <html lang="en">
         <body className={inter.className}>
            <div className="container">
               <div className="root-layout">
                  <div className="root-layout-content">
                     <UserCard
                        type="Cached Example"
                        first={cachedUser.name.first}
                        last={cachedUser.name.last}
                     />

                     <div className="mt-2"></div>

                     <UserCard
                        type="No Cahed Example"
                        first={noCachedUser.name.first}
                        last={noCachedUser.name.last}
                     />
                  </div>

                  {children}
               </div>
            </div>
         </body>
      </html>
   );
}

const UserCard = ({
   type,
   first,
   last,
}: {
   type: string;
   first: string;
   last: string;
}) => {
   return (
      <div>
         <h3>{type}</h3>
         <h4>
            Name <>{first}</>
         </h4>
      </div>
   );
};
