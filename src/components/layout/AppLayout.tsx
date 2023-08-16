import { Outlet } from "react-router";
import AppHeader from "../header/AppHeader";
import AppFooter from "../footer/AppFooter";
import styled from "@emotion/styled";

const Main = styled.main`
  text-align: center;
  padding: 1.6rem;
  min-width: 34.3rem;
  overflow: hidden;

  @media (min-width: 48em) {
    text-align: left;
    margin: 3rem;
  }

  @media (min-width: 90em) {
    margin: 4rem auto;
    max-width: 111rem;
  }
  /* max-width: 34.4rem; */
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
