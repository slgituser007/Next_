import { NavBarS, NavUl, LogoSec } from "../styled/NavbarStyled";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <NavBarS>
        <LogoSec>
          <Link href="/">
            <h1>Next_</h1>
          </Link>
        </LogoSec>
        <NavUl>
          <li>
            {" "}
            <img
              src="https://i.ibb.co/FJKVnB6/Send.png"
              alt="Send"
              border="0"
            />
          </li>
          <li>
            <img
              src="https://i.ibb.co/vdyX2ND/Profile.png"
              alt="Profile"
              border="0"
            />
          </li>
          <li>
            {" "}
            <img
              src="https://i.ibb.co/8x2pjNv/Filter.png"
              alt="More "
              border="0"
            />
          </li>
        </NavUl>
      </NavBarS>
    </>
  );
};
export default Navbar;
