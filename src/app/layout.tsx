import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/main/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "TrailGo",
    description:
        "TrailGo: An innovative online platform designed to simplify and enhance the cargo booking process for railway transportation.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>{children}</body>
        </html>
    );
}
