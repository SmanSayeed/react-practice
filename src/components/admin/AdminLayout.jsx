import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

export default function AdminLayout() {
  return (
    <>
    AdminLayout
    <Sidebar/>
    <Outlet/>
    </>
  )
}
