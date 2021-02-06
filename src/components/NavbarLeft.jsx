import { NavLeft, NavLeftUl, NavLi } from "../styled/NavbarLeftStyled";
const NavbarLeft = ({ Color }) => {
  return (
    <>
      <NavLeft>
        <NavLeftUl>
          <NavLi Color={Color}>About</NavLi>
          <NavLi>Contact Us</NavLi>
          <NavLi>Explore</NavLi>
          <NavLi>Pricing</NavLi>
        </NavLeftUl>
      </NavLeft>
    </>
  );
};

export default NavbarLeft;
