import { useEffect, useState } from "react";
import { randomUser } from "../api/ramdomeUser";
import Card from "../../components/UserCard";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";

import { makeStyles } from "@material-ui/core/styles";
import { Box, Container, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
   backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: "#fff",
   },
}));
export default function index() {
   const [user, setUser] = useState(null);
   const classes = useStyles();

   useEffect(() => {
      randomUser().then((data) => {
         if (data.results.length > 0) {
            setUser(data.results[0]);
         }
         console.log("user: ", data.results[0]);
         setOpen(false);
      });
   }, []);
   const [open, setOpen] = useState(true);
   const handleClose = () => {
      setOpen(false);
   };

   return (
      <Container>
         <Box p={5}>
            <Typography variant="h4">Ramdom User API</Typography>
         </Box>

         <Card user={user} />
      </Container>
   );
}
