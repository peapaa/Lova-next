"use client";

import React, { useContext } from "react";
import { GoSearch } from "react-icons/go";

// mui
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";
import ManageAccountsOutlinedIcon from "@mui/icons-material/ManageAccountsOutlined";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import {
  Box,
  Button,
  InputAdornment,
  InputBase,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

// logo
import logo from "@/_assets/images/header-logo/logo.png";

// context
import AuthContext from "@/_context/AuthContext";

// image
import Image from "next/image";

// router
import { useRouter } from "next/navigation";

const Header: React.FC = () => {
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const router = useRouter();

  const authContext = useContext(AuthContext);
  if (!authContext) {
    return null;
  }
  const { handleLogout } = authContext;
  const handleLogoutClick = () => {
    handleLogout();
    router.push("/login");
  };

  return (
    <Box
      display="flex"
      alignItems="center"
      px={6}
      py={1.5}
      className="bg-white"
    >
      <Box flex={1} display="flex">
        <Image
          src={logo}
          alt="logo"
          width={26}
          height={26}
          priority
          quality={100}
          className="cursor-pointer mr-2 w-[26px] h-[26px]"
        />
        <Typography
          sx={{ fontSize: theme.typography.subtitle1, fontWeight: "700" }}
        >
          Laravel Nova
        </Typography>
      </Box>
      <Box flex={5} display="flex" justifyContent="space-between">
        <Box>
          <InputBase
            placeholder="Press / to search"
            sx={{
              width: "320px",
              borderRadius: "25px",
              paddingLeft: "8px",
              color: "#94A3B8",
            }}
            className="bg-backgroundColor"
            startAdornment={
              <InputAdornment position="start">
                <GoSearch style={{ color: "#94A3B8" }} />
              </InputAdornment>
            }
          />
        </Box>
        <Box display="flex">
          <Box>
            <NotificationsNoneIcon
              style={{ color: "#64748B", cursor: "pointer" }}
            />
          </Box>
          <Box display="flex" alignItems="center">
            <Image
              // src={user?.avatar}
              src={logo}
              alt="avatar"
              width={26}
              height={26}
              priority
              quality={100}
              className="ml-5 mr-2 cursor-pointer w-[26px] h-[26px]"
            />
            <Button
              id="fade-button"
              aria-controls={open ? "fade-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
              style={{ padding: 0 }}
            >
              <Typography style={{ color: "#475569" }}>
                {/* {user?.name} */}
                Thien
              </Typography>
              <ExpandMoreIcon style={{ color: "#64748B" }} />
            </Button>
            <Menu
              id="fade-menu"
              MenuListProps={{
                "aria-labelledby": "fade-button",
              }}
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              sx={{
                "& .MuiPaper-root": {
                  width: "140px !important",
                  marginTop: "6px",
                },
              }}
            >
              <MenuItem onClick={handleClose}>
                <Person2OutlinedIcon
                  style={{ color: "#64748B", marginRight: 10 }}
                />
                Profile
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <ManageAccountsOutlinedIcon
                  style={{ color: "#64748B", marginRight: 10 }}
                />
                My account
              </MenuItem>
              <MenuItem onClick={() => handleLogoutClick()}>
                <LoginOutlinedIcon
                  style={{ color: "#64748B", marginRight: 10 }}
                />
                Logout
              </MenuItem>
            </Menu>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
