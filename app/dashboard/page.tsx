import Sidebar from "@/app/components/layout/Sidebar";
import MainLayout from "@/app/components/layout/MainLayout";

export default function Dashboard() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <MainLayout />
    </div>
  );
}
