import { Box, Stack } from "@mui/material";
import { NavLink, Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <Box px={2} py={1}>
      <Stack
        component="nav"
        direction="row"
        gap={2}
        mb={2}
        border={1}
        borderRadius={"5px"}
        py={2}
        px={2}
      >
        <img
          style={{ width: "50px" }}
          src="https://png.pngtree.com/element_our/20190603/ourmid/pngtree-movie-board-icon-image_1455346.jpg"
          alt=""
        />
        <Box component={NavLink} to="/">
          Home
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
