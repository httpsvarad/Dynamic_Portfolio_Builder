import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { ToastContainer } from "react-toastify";
import Provider from "./Provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ninjax",
  description: "Your Portfolio, Your Power!",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={inter.className}>
        <div data-theme="luxury">
        <Provider>
        {children}
        </Provider>
        <ToastContainer />
        </div>
        
        </body>
    </html>
    </ClerkProvider>
  );
}
