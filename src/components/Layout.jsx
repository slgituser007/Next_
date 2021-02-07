import Navbar from "./Navbar";
import NavbarLeft from "./NavbarLeft";
import {
  LayoutS,
  WaveS,
  MapS,
  HeadingS,
  HeadingH,
} from "../styled/LayoutStyled";
import Wave from "../assets/Wave";

const Layout = ({ Heading, Color }) => {
  return (
    <>
      <LayoutS>
        <Navbar />
        <div>
          <NavbarLeft Color={Color} />
          <HeadingS>
            <HeadingH Color={Color}>{Heading ? Heading : "Loading"}</HeadingH>
          </HeadingS>
          <WaveS>
            <Wave Color={Color} />
          </WaveS>
          <MapS>
            <img src="https://i.ibb.co/7bm5qYQ/Map.png" alt="Map" border="0" />
          </MapS>
        </div>
      </LayoutS>
    </>
  );
};

export default Layout;
