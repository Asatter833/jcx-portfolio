import "../styles/globals.css";
import "aos/dist/aos.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  icons: "/favicon.svg",
  title: "JCX BD - Beyond Bonding",
  description:
    "JCX Developments Ltd embarked on the Real Estate journey with the commitment to bring contemporary design and develop large-scale Residential, Commercial, and Condominium projects in Bangladesh with Japanese collaboration and experience.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-900 " suppressHydrationWarning>
        <Navbar />
        <div className="min-h-[80vh]">{children}</div>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
