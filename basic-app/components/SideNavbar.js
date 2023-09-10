import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import {
   AccountBoxOutlined,
   HelpOutline,
   HomeOutlined,
   InfoOutlined,
   PermContactCalendarOutlined,
   Person,
   PersonPinCircleOutlined,
} from "@material-ui/icons";
import ImageLinks from "../constants/ImageLinks";

const getIcon = (index) => {
   switch (index) {
      case 0:
         return <HomeOutlined />;
      case 1:
         return <PermContactCalendarOutlined />;
      case 2:
         return <InfoOutlined />;
      case 3:
         return <Person />;
      default:
         return <HelpOutline />;
   }
};

const linkNames = ["Home", "Contact", "About", "Random User"];
const Urls = ["/", "/contact", "/about", "/random-user"];

export default function SideNavbar() {
   const drawerWidth = 280;

   const useStyles = makeStyles((theme) => ({
      root: {
         display: "flex",
      },
      appBar: {
         width: `calc(100% - ${drawerWidth}px)`,
         marginLeft: drawerWidth,
      },
      drawer: {
         width: drawerWidth,
         flexShrink: 0,
      },
      drawerPaper: {
         width: drawerWidth,
      },
      // necessary for content to be below app bar
      toolbar: {
         display: "flex",
         justifyContent: "center",
      },
      content: {
         flexGrow: 1,
         backgroundColor: theme.palette.background.default,
         padding: theme.spacing(3),
      },
   }));

   const classes = useStyles();
   return (
      <div className={classes.root}>
         <CssBaseline />
         <AppBar position="fixed" className={classes.appBar}>
            <Toolbar>
               <Typography variant="h6" noWrap>
                  Permanent drawer
               </Typography>
            </Toolbar>
         </AppBar>
         <Drawer
            className={classes.drawer}
            variant="permanent"
            classes={{
               paper: classes.drawerPaper,
            }}
            anchor="left"
         >
            <div
               className={classes.toolbar}
               children={
                  <img
                     src={ImageLinks.googleLogo}
                     width={180}
                     style={{ margin: "0 auto" }}
                  />
               }
               style={{ padding: "20px" }}
            />
            <Divider />
            <List>
               {linkNames.map((text, index) => (
                  <ListItem button key={text} component="a" href={Urls[index]}>
                     <ListItemIcon>{getIcon(index)}</ListItemIcon>
                     <ListItemText primary={text} />
                  </ListItem>
               ))}
            </List>
         </Drawer>
      </div>
   );
}
