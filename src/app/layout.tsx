import { AuthProvider } from "@/_context/AuthContext";
import theme from "@/_theme";
import { ThemeProvider } from "@mui/material";
import type { Metadata } from "next";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Laravel Nova",
  description: "Laravel Nova",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-backgroundColor border w-full">
        <AuthProvider>
          <ThemeProvider theme={theme}>
            {/* <div className="font-nunito_Sans"> */}
            {children}
            {/* </div> */}
          </ThemeProvider>

          <ToastContainer
            position="top-right"
            autoClose={2500}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
        </AuthProvider>
      </body>
    </html>
  );
}
