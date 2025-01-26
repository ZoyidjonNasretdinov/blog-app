// app/layout.tsx yoki app/layout.js
"use client"; // Bu qatorni qo'shing

import "../styles/globals.css";
import { Roboto } from "next/font/google";
import { StyledEngineProvider, ThemeProvider, CssBaseline } from "@mui/material";
import theme from "../helpers/theme";

// Google Fonts: Roboto
const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${roboto.className} antialiased`}>
        <StyledEngineProvider injectFirst>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
          </ThemeProvider>
        </StyledEngineProvider>
      </body>
    </html>
  );
}