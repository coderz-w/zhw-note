import type { Metadata } from "next";
import { ThemeProvider } from "@/components/provider/theme-provider";
import "./globals.css";
import { ConvexClientProvider } from "@/components/provider/convex-provider";
export const metadata: Metadata = {
  title: "note website",
  description: "app for note",
  icons: [
    {
      media: "(prefers-color-scheme: light)",
      url: "/redRock.png",
      href: "/redRock.png",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className=" h-full ">
        <ConvexClientProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
            storageKey="zhw-theme-2"
          >
            {children}
          </ThemeProvider>
        </ConvexClientProvider>
      </body>
    </html>
  );
}
