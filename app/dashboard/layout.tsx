import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard | Admin",
  description: "Admin Dashboard",
};

export default function AdminDashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="w-screen h-screen">{children}</div>;
}
