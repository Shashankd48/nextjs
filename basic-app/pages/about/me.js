import { Box } from "@material-ui/core";
import SideNavbar from "../../components/SideNavbar";

const Me = () => {
   return (
      <div>
         <SideNavbar />
         <Box mt={10} ml={37}>
            <h1>This is Me. How you doing</h1>
         </Box>
      </div>
   );
};

export default Me;
