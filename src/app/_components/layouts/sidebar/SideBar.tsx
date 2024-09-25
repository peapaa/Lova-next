"use client";

import React, { useEffect } from "react";

// mui
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { Box, Collapse, List, Typography } from "@mui/material";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useTheme } from "@mui/material/styles";

// logo
import resourceLogo from "../../../_assets/images/sidebar-logo/Vector.svg";
import dashbroadLogo from "../../../_assets/images/sidebar-logo/view-grid.svg";

// utils
import { dashboardList, resourcesList } from "../../../_utils/data";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Item = ({ title, to }: { title: string; to: string }) => {
  const theme = useTheme();
  const pathname = usePathname();
  const isActive = pathname.startsWith(`/admin/${to}`);
  return (
    <Link href={to}>
      <ListItemButton
        sx={{
          paddingLeft: "48px",
          color: isActive
            ? `${theme.palette.blueAccent?.secondary}`
            : `${theme.palette.textColor?.main}`,
        }}
      >
        <Typography
          sx={{
            fontWeight: isActive ? "bold" : "normal",
          }}
        >
          {title}
        </Typography>
      </ListItemButton>
    </Link>
  );
};
const SideBar: React.FC = () => {
  const [open1, setOpen1] = React.useState(false);
  const pathname = usePathname();
  console.log("pathname", pathname);
  const handleClick1 = () => {
    setOpen1(!open1);
  };

  const [open2, setOpen2] = React.useState(false);

  const handleClick2 = () => {
    setOpen2(!open2);
  };
  // when login after redirect user of resource, don't open menu dashboard
  useEffect(() => {
    if (pathname.startsWith("/admin/dashbroad")) {
      setOpen1(true);
    } else if (pathname.startsWith("/admin/resources")) {
      setOpen2(true);
    }
  }, [pathname]);

  return (
    <Box className="lg:w-[180px] xl:w-[240px]">
      <Box className="lg:pl-0 xl:pl-4">
        <Box>
          <ListItemButton onClick={handleClick1} sx={{ width: "100%" }}>
            <ListItemIcon sx={{ minWidth: 0, marginRight: "8px" }}>
              <Image
                src={dashbroadLogo}
                alt="dashbroadLogo"
                width={24}
                height={24}
                className="w-6 h-6"
              />
            </ListItemIcon>
            <ListItemText
              primary="Dashbroad"
              primaryTypographyProps={{
                fontSize: "16px",
                color: "#64748B",
              }}
            />

            {open1 ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={open1} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemText
                sx={{
                  pl: 0,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {dashboardList.map((dashboardListItem, index) => (
                  <Item
                    title={dashboardListItem.title}
                    to={dashboardListItem.href}
                    key={index}
                  />
                ))}
              </ListItemText>
            </List>
          </Collapse>
        </Box>
        <Box>
          <Box>
            <ListItemButton onClick={handleClick2} sx={{ width: "100%" }}>
              <ListItemIcon sx={{ minWidth: 0, marginRight: "8px" }}>
                <Image
                  src={resourceLogo}
                  alt="resourceLogo"
                  width={24}
                  height={24}
                  className="w-6 h-6"
                />
              </ListItemIcon>
              <ListItemText
                primary="Resources"
                primaryTypographyProps={{ fontSize: "16px", color: "#64748B" }}
              />
              {open2 ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open2} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemText
                  sx={{
                    pl: 0,
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  {resourcesList.map((resourcesListItem, index) => (
                    <Item
                      title={resourcesListItem.title}
                      to={resourcesListItem.href}
                      key={index}
                    />
                  ))}
                </ListItemText>
              </List>
            </Collapse>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SideBar;
