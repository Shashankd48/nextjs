import Axios from "axios";
export function randomUser() {
   const request = Axios.get(`https://randomuser.me/api/`);
   return request
      .then((response) => {
         return response.data;
      })
      .catch((error) => {
         return error;
      });
}
