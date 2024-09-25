"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
// component
import Header from "../_components/layouts/header/Header";
import SideBar from "../_components/layouts/sidebar/SideBar";
import Footer from "../_components/layouts/footer/Footer";
// hooks
import useAuthContext from "../_hooks/useAuthContext";

// mui
import { Box } from "@mui/material";

function LayoutAdmin({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const authContext = useAuthContext();
  const router = useRouter();
  const { token } = authContext;

  useEffect(() => {
    if (!token) {
      localStorage.setItem("redirectPath", window.location.href);
      console.log("window.location.href", window.location.href);
      router.push("/login");
    }
  }, [router, token]);

  return (
    <div className="w-full h-full">
      <Header />
      <div className="flex min-h-[calc(100vh-60px)] w-full">
        <Box flex={1}>
          <SideBar />
        </Box>
        <Box flex={5} className="pr-4 overflow-auto">
          <div className="flex flex-col h-full">
            <div className="flex-grow">{children}</div>
            <Footer />
          </div>
        </Box>
      </div>
    </div>
  );
}

export default LayoutAdmin;
