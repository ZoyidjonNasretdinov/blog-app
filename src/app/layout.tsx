// Global uslublar importi
import "../styles/globals.css";
import { Roboto } from "next/font/google";
import { CacheProvider } from "@emotion/react";
import createEmotionCache from "../helpers/create-emotion-cache";
import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "../helpers/theme"; // Fayl kengaytmasini '.ts' qoldirmasa ham ishlaydi

// Google Fonts: Roboto
const roboto = Roboto({
  weight: ["400", "500", "700"], // Bir nechta og'irlik qo'llash mumkin
  subsets: ["latin"],
});

// Emotion Cache: Client Side uchun yaratiladi
const clientSideEmotionCache = createEmotionCache();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${roboto.className} antialiased`}>
        {/* Emotion Cache bilan o'ralgan */}
        <CacheProvider value={clientSideEmotionCache}>
          {/* Material-UI mavzusi bilan o'ralgan */}
          <ThemeProvider theme={theme}>
            {/* Material-UI Global uslublari */}
            <CssBaseline />
            {children}
          </ThemeProvider>
        </CacheProvider>
      </body>
    </html>
  );
}
