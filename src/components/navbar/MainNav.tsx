import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

const NavMenuUl = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 2rem;
`;

type Props = {};

//* COMPONENT: MainNav
export default function MainNav({}: Props) {
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
