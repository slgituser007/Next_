import { NavBarS, NavUl, LogoSec } from "../styled/NavbarStyled";

const Navbar = () => {
  return (
    <>
      <NavBarS>
        <LogoSec>
          <h1>Next_</h1>
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
