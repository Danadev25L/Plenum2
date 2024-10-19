import "./globals.css";
import Footer from "./components/Footer";
import SmoothScrollProvider from "./components/SmoothScrollProvider";
import Navbar from "./components/Navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <SmoothScrollProvider>
        <div className="absolute top-0 left-0 right-0 z-50">
              <Navbar /> 
            </div>
          <div style={{ flex: 1 }}>
            <main>{children}</main>
          </div>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}