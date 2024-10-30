// import "./globals.css";
// import "@/app/gallery.css"
// import Footer from "./components/Footer";
// import SmoothScrollProvider from "./components/SmoothScrollProvider";
// import Navbar from "./components/Navbar";
// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en">
//       <body>
//         <SmoothScrollProvider>
//           <div className="absolute top-0 left-0 right-0 z-50">
//             <Navbar />
//           </div>
//           <div style={{ flex: 1 }}>
//             <main>{children}</main>
//           </div>
//           <Footer />
//         </SmoothScrollProvider>
//       </body>
//     </html>
//   );
// }


import "./globals.css";
import "@/app/gallery.css";
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
          <div className="flex flex-col min-h-screen">
            <div className="absolute top-0 left-0 right-0 z-50">
              <Navbar />
            </div>
            {/* Main content area with scrollable sections */}
            <div className="flex-1 z-20">
              <main>{children}</main>
            </div>
            {/* Footer with parallax effect */}
            <Footer />
          </div>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
