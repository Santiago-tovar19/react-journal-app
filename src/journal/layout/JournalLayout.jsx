import { Box, Grid } from "@mui/material";
import { NavBar } from "../componen/NavBar";

export const JournalLayout = ({ children }) => {
  return (
    <Box
      sx={{ display: "flex" }}
      className="animate__animated animate__fadeIn animate__faster"
    >
      <NavBar />

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <NavBar />
        {children}
      </Box>
    </Box>
  );
};
