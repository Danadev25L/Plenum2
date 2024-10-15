import "./globals.css";
import Footer from "./components/Footer";
import ClientLayout from "./ClientLayout";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ClientLayout>
          <main className="flex-grow">{children}</main>
          <Footer/>
        </ClientLayout>
      </body>
    </html>
  );
}
