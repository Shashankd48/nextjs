"use client";
import { UserRepository, getRandomUserNoCache } from "@/actions/random.api";
import { useEffect, useState } from "react";

const Profile = () => {
   const [user, setUser] = useState<UserRepository | null>(null);

   useEffect(() => {
      getUser();
   }, []);

   const getUser = async () => {
      const tempUser = await getRandomUserNoCache();
      setUser(tempUser);
   };

   if (!user) return <div>Loading...</div>;

   return (
      <div>
         <h4>
            Name {user.name.first} {user.name.last}
         </h4>
      </div>
   );
};

export default Profile;
