import Footer from "@/components/ui/Footer";
import Header from "@/components/ui/Header";
import TopAlert from "@/components/ui/TopAlert";

const StoreLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <main>
      <TopAlert />
      <Header />
      {children}
      <Footer />
    </main>
  );
};

export default StoreLayout;
