import "./globals.css";
import React from "react";
import { Roboto } from "next/font/google";
import ToastProvider from "../components/ToastProvider";
import Header from "../components/Header/Header";
import Footer from "@/components/Footer/Footer";

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
                    <Footer />
                </ToastProvider>
            </body>
        </html>
    );
}
