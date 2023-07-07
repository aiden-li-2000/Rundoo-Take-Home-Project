import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { Button } from "@mui/material";
import InventoryIcon from "@mui/icons-material/Inventory";
import ListAltIcon from "@mui/icons-material/ListAlt";
import TransferWithinAStationIcon from "@mui/icons-material/TransferWithinAStation";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import QuizIcon from "@mui/icons-material/Quiz";
// import LoginForm from './LoginForm';
// import { SignupForm } from './SignupForm';
// import SupplierForm from './SupplierForm';
import axios from "axios";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignupForm";
import { Link as RouterLink } from "react-router-dom";
import ConnectedLogOutButton from "./LogOutButton";
import { logout } from "../actions/auth";

const drawerWidth = 240;

function Home() {

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        style={{ background: "#FFFFFF" }}
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          {/* <Typography variant="h6" noWrap component="div">
            Rundoo
          </Typography> */}
          <RouterLink to="/">
            <img
              src="https://uploads-ssl.webflow.com/5f2b979c4c1f43643c0fe340/64388c2e5d744f6ebe4b325f_wordmark300.png"
              loading="lazy"
              width="130"
              alt="Rundoo"
              className="image-21"
            />
          </RouterLink>
          <nav>
            <Button component={RouterLink} to="sign-up-popup">
              Sign Up
            </Button>
            <Button component={RouterLink} to="log-in-popup">
              Log in
            </Button>
            <ConnectedLogOutButton func={logout}/>
          </nav>
        </Toolbar>
      </AppBar>

      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: "auto" }}>
          <List>
            {["Account", "Help"].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton component={RouterLink} to="/logged-in">
                  <ListItemIcon>
                    {(() => {
                      switch (text) {
                        case "Account":
                          return <AccountBoxIcon />;
                        default:
                          return <QuizIcon />;
                      }
                    })()}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {["Stock", "Orders", "Transfers"].map((text, index: number) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {(() => {
                      switch (text) {
                        case "Stock":
                          return <InventoryIcon />;
                        case "Orders":
                          return <ListAltIcon />;
                        case "Transfers":
                          return <TransferWithinAStationIcon />;
                        default:
                          return "<InventoryIcon />";
                      }
                    })()}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <br />
        <br />
        {/* <div className="log-in-form"> Welcome to the home page...to be continued...too tired at the moment...</div> */}
      </Box>
    </Box>
  );
}

export default Home;