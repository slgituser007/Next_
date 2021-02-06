import { NavLeft, NavLeftUl } from "../styled/NavbarLeftStyled";
const NavbarLeft = () => {
  return (
    <>
      <NavLeft>
        <NavLeftUl>
          <li>About</li>
          <li>Contact Us</li>
          <li>Explore</li>
          <li>Pricing</li>
        </NavLeftUl>
      </NavLeft>
    </>
  );
};

export default NavbarLeft;
