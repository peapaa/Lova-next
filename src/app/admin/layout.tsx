"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
// component
import { Footer } from "@/_components/layouts/footer";
import { Header } from "@/_components/layouts/header";
import { SideBar } from "@/_components/layouts/sidebar";
// hooks
import useAuthContext from "@/_hooks/useAuthContext";
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
  console.log("token", token);

  useEffect(() => {
    if (!token) {
      router.push("/login");
    }
  }, [router, token]);

  return (
    <div>
      <Header />
      <div className="flex min-h-[calc(100vh-60px)]">
        <Box flex={1}>
          <SideBar />
        </Box>
        <Box flex={5}>
          <div className="flex flex-col h-full">
            <div className="flex-grow">
              <div className="w-full xl:pl-8 xl:pr-8 my-6 lg:pl-0 lg:pr-2 ">
                {children}
              </div>
            </div>
            <Footer />
          </div>
        </Box>
      </div>
    </div>
  );
}

export default LayoutAdmin;
