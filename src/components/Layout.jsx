import Navbar from "./Navbar";
import NavbarLeft from "./NavbarLeft";
import { LayoutS, WaveS, MapS, HeadingS } from "../styled/LayoutStyled";
import Wave from "../assets/Wave";
const Layout = ({ Heading, Color }) => {
  return (
    <>
      <LayoutS>
        <Navbar />
        <div>
          <NavbarLeft Color={Color} />
          <HeadingS>
            <h1>{Heading ? Heading : "Loading"}</h1>
          </HeadingS>
          <WaveS>
            <Wave />
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
