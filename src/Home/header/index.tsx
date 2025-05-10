import {
  AppBar,
  Box,
  Button,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import { menuItems } from "../home.data";
import { usePathname, useRouter } from "next/navigation";
import logo from "../../assets/images/logo.png"
import Image from "next/image";

export const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const router = useRouter();
  const pathname = usePathname();
  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Toolbar
        sx={{
          backgroundColor: "#fff",
          borderBottom: "1px solid #e0e0e0",
          minHeight: "64px",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", width: "33.33%" }}>
          <Image src={logo} alt='logo' width={100} height={100} />
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "33.33%",
          }}
        >
          {!isMobile && (
            <Box sx={{ display: "flex", gap: 2 }}>
              {menuItems.map((item) => (
                <Button
                  key={item.label}
                  onClick={() => router.push(item.path)}
                  sx={{
                    color:
                      pathname === item.path
                        ? theme.palette.primary.main
                        : "#000",
                    fontWeight: pathname === item.path ? 600 : 400,
                    "&:hover": {
                      color: theme.palette.primary.main,
                    },
                  }}
                >
                  {item.label}
                </Button>
              ))}
            </Box>
          )}
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            width: "33.33%",
          }}
        >
          <Button
            variant="contained"
            color="secondary"
            onClick={() => router.push("/register")}
            sx={{
              backgroundColor: "#f28b82",
              "&:hover": { backgroundColor: "#e57373" },
            }}
          >
            Registration
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
