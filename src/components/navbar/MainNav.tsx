import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";
import navData from "../../data/navigation.json";

const NavMenuUl = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 2rem;

  @media (min-width: 48em) {
    font-size: 2rem;
  }
  @media (min-width: 90em) {
  }

  & a {
    transition: all 0.2s ease-in;

    &:hover {
      color: var(--color-green-500);
    }

    &.active {
      /* border-bottom: 2px solid var(--color-green-500); */
      color: var(--color-green-400);
      pointer-events: none;
      /* color: var(--) */
    }
  }
`;

//* COMPONENT: MainNav
export default function MainNav() {
  const renderNav = navData.map((nav) => (
    <li key={nav.to}>
      <NavLink to={nav.to}>{nav.name}</NavLink>
    </li>
  ));

  // output
  return (
    <nav>
      <NavMenuUl as="ul">{renderNav}</NavMenuUl>
    </nav>
  );
}
