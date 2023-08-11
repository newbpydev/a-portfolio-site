import MainNav from "../navbar/MainNav";
import SocialNav from "../navbar/SocialNav";

type Props = {};

//* COMPONENT: AppHeader
export default function AppHeader({}: Props) {
  // output
  return (
    <header>
      <span>juangomez</span>

      <SocialNav />

      <MainNav />
    </header>
  );
}
