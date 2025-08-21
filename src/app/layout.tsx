import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";

import { configs } from "@/lib/configs";

import { ThemeProvider } from "@/components/theme-provider";
import { Guidelines } from "@/components/guidelines";

import { Header } from "@/widgets/header";
import { Footer } from "@/widgets/footer";

import "@/assets/css/globals.css";

const bricolageGrotesque = Bricolage_Grotesque({
  variable: "--font-bricolage-grotesque",
  subsets: ["latin"],
});

export function generateMetadata(): Metadata {
  return {
    title: {
      default: configs.app.author_name
        ? `${configs.app.author_name}'s Website`
        : "Website",
      template: configs.app.author_name
        ? `%s - ${configs.app.author_name}`
        : "%s",
    },
    description: configs.app.description,
    authors: [{ name: configs.app.author }],
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/images/favicon.png" />
      </head>

      <body className={`${bricolageGrotesque.variable}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {/* Header */}
          <Header />

          {/* Entire Content */}
          {children}

          {/* Footer */}
          <Footer />

          {/* Guidelines / Rulers on the entire page */}
          <Guidelines isFixed />
        </ThemeProvider>
      </body>
    </html>
  );
}
