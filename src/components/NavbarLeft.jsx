import {
  NavLeft,
  NavLeftUl,
  NavLi,
  NavLiSec,
  ActiveNavLi,
} from "../styled/NavbarLeftStyled";
import Link from "next/link";
import { useRouter } from "next/router";

const NavbarLeft = ({ Color }) => {
  const router = useRouter();
  const NavItem = [
    {
      name: "About",
      links: "/about",
    },
    {
      name: "Contact Us",
      links: "/contact",
    },
    {
      name: "Search",
      links: "/search",
    },
    {
      name: "Pricing",
      links: "/pricing",
    },
  ];

  return (
    <>
      <NavLeft>
        <NavLeftUl>
          {NavItem.map((ni, key) => {
            return (
              <>
                <NavLiSec>
                  <ActiveNavLi
                    className={router.pathname == ni.links ? "active" : ""}
                    key={key}
                  ></ActiveNavLi>
                  <Link href={ni.links} key={key}>
                    <NavLi Color={Color} key={key}>
                      {ni.name}
                    </NavLi>
                  </Link>
                </NavLiSec>
              </>
            );
          })}
        </NavLeftUl>
      </NavLeft>
    </>
  );
};

export default NavbarLeft;
