"use client";
import MobileSidebar from "@/components/dashboard/MobileSidebar";
import Navbar from "@/components/dashboard/Navbar";
import Sidebar from "@/components/dashboard/Sidebar";

const DashboardLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <main>
      <section className="flex flex-col xl:h-screen items-start lg:flex-row">
        <MobileSidebar />
        <Sidebar />
        <div className="lg:w-3/4 xl:w-4/5 lg:m-5 w-full">
          {/* <!-- NAVBAR --> */}
          <Navbar />
          {/* <!-- CONTENT --> */}
          <div className="m-5">{children}</div>
        </div>
      </section>
    </main>
  );
};

export default DashboardLayout;
