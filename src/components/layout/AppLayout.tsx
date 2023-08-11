import { Outlet } from "react-router";
import AppHeader from "../header/AppHeader";
import AppFooter from "../footer/AppFooter";

type Props = {};

//* COMPONENT: AppLayout
export default function AppLayout({}: Props) {
  // output
  return (
    <main>
      <AppHeader />

      <Outlet />

      <AppFooter />
    </main>
  );
}
