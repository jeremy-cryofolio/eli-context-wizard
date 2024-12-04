import { ThemeProvider } from "@/providers/ThemeProvider";
import { PropsWithChildren } from "react";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Eli Context Wizard Demo",
  description: "Eli Context Wizard Demo",
};

const RootLayout = ({ children }: PropsWithChildren) => (
  <html lang="en" className="p-4" suppressHydrationWarning>
    <body>
      <ThemeProvider attribute="class" defaultTheme="dark">
        <main>{children}</main>
      </ThemeProvider>
    </body>
  </html>
);

export default RootLayout;
