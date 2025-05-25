import Template from "@/components/dashboard/layout/Template";
import DashboardProvider from "@/providers/Dashboard-Provider";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html dir="rtl" lang="fa" suppressHydrationWarning>
      <body className="font-Dana bg-[#f3f4f6] text-zinc-900 dark:bg-zinc-900 dark:text-white overflow-x-hidden transition-all">
        <DashboardProvider>
          <Template>{children}</Template>
        </DashboardProvider>
      </body>
    </html>
  );
}
