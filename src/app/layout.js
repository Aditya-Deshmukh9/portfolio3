import { Inter,Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SmoothScroll from "./components/SmoothScroll";

const inter = Inter({
  subsets: ["latin"], display:
    'swap'
  ,
  weight: ['400', '700']
});

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})

export const metadata = {
  title: "Portfolio: Aditya Deshmukh",
  description: "Aditya Deshmukh Portfolio website"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${roboto.className} bg-black tracking-tighter text-gray-200 antialiased scroll-smooth`}>
        <SmoothScroll>
          <Navbar />
          {children}
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
