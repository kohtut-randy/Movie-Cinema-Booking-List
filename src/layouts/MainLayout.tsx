import { Box, Stack, Typography } from "@mui/material";
import { NavLink, Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <Box px={2} py={1}>
      <Stack
        component="nav"
        direction="row"
        gap={2}
        mb={2}
        sx={{ background: "#ba000d" }}
        borderRadius={"5px"}
        py={2}
        px={2}
      >
        <Box component={NavLink} to="/">
          <Typography sx={{ color: "white" }}>Home</Typography>
        </Box>
        <Box component={NavLink} to="/popular">
          Popular
        </Box>
        <Box component={NavLink} to="/about">
          About
        </Box>
      </Stack>
      <Box component="main">
        <Outlet />
      </Box>
    </Box>
  );
};

export default MainLayout;
