import "./globals.css";
import React from "react";
import { Roboto } from "next/font/google";
import ToastProvider from "./_components/ToastProvider";
import Header from "./_components/Header/Header";
import Footer from "@/app/_components/Footer/Footer";
import Cta from "@/app/_components/Cta/Cta";

const roboto = Roboto({
    subsets: ["latin"],
    weight: ["400", "600"],
    variable: "--font-roboto",
});

type RootLayoutProps = {
    children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <html lang="en">
            <title>Welcome | NR Development</title>
            <link rel="icon" type="image/png" href="/assets/logo.svg" />
            <body className={`${roboto.className}`}>
                <ToastProvider>
                    <Header />
                    {children}
                    <Cta />
                    <Footer />
                </ToastProvider>
            </body>
        </html>
    );
}
