import MainNav from "../navbar/MainNav";

type Props = {};

//* COMPONENT: AppHeader
export default function AppHeader({}: Props) {
  // output
  return (
    <header>
      <span>Logo</span>

      <MainNav />
    </header>
  );
}
