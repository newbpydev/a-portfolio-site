import { Outlet } from "react-router";
import AppHeader from "../header/AppHeader";
import AppFooter from "../footer/AppFooter";
import styled from "@emotion/styled";

const Main = styled.main`
  text-align: center;
  overflow: hidden;

  @media (min-width: 48em) {
    text-align: left;
  }

  @media (min-width: 90em) {
    margin: 0 auto;
    overflow: hidden;
  }
`;

//* COMPONENT: AppLayout
export default function AppLayout() {
  // output
  return (
    <Main>
      <AppHeader />

      <Outlet />

      <AppFooter />
    </Main>
  );
}
