import styled from "@emotion/styled";

type Props = {};

const StyledWrongIcon = styled.svg`
  position: absolute;
  bottom: 1.8rem;
  right: 0rem;
`;

//* COMPONENT: WrongIcon
export default function WrongIcon({}: Props) {
  // output
  return (
    <StyledWrongIcon
      width="24"
      height="24"
      viewBox="0 0 1024 1024"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="#ff6f5b"
        // fill="currentColor"
        d="M480 674V192c0-18 14-32 32-32s32 14 32 32v482h-64zm0 63h64v60h-64v-60zM0 512C0 229 229 0 512 0s512 229 512 512s-229 512-512 512S0 795 0 512zm961 0c0-247-202-448-449-448S64 265 64 512s201 448 448 448s449-201 449-448z"
      />
    </StyledWrongIcon>
  );
}
