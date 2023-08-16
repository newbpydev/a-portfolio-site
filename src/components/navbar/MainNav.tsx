import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

const NavMenuUl = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 2rem;

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
  // output
  return (
    <nav>
      <NavMenuUl as="ul">
        <li>
          <NavLink to={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink to={"/blog"}>Blog</NavLink>
        </li>
        <li>
          <NavLink to={"/projects"}>Projects</NavLink>
        </li>
        <li>
          <NavLink to={"/about"}>About</NavLink>
        </li>
      </NavMenuUl>
    </nav>
  );
}
