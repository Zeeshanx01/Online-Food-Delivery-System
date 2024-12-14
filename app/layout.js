import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SessionWrapper from "@/components/SessionWrapper";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/icon.gif" />
      </head>

      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`} style={{
        backgroundImage: `url('/header.png')`,
        backgroundAttachment: 'fixed',
        // backgroundSize: 'cover',
        // backgroundPosition: 'center'
      }} >
        <SessionWrapper>

          <Navbar />
          <div className="min-h-[85vh]">
            {children}
          </div>
          <Footer />
        </SessionWrapper>
        <script src="https://cdn.lordicon.com/lordicon.js"></script>
      </body>
    </html>
  );
}
