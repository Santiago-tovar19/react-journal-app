import { Grid, Toolbar } from "@mui/material";
import { NavBar } from "../componen/NavBar";
import { SideBar } from "../componen/Sidebar";

const drawerWidth = 280;

export const NuevoComp = ({ children }) => {
  return (
    <Grid sx={{ display: "flex" }}>
      <NavBar drawerWidth={drawerWidth} />

      <SideBar drawerWidth={drawerWidth} />

      <Grid component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        {children}
      </Grid>
    </Grid>
  );
};
