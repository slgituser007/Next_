import Navbar from "./Navbar";
import NavbarLeft from "./NavbarLeft";
import { LayoutS, WaveS, MapS } from "../styled/LayoutStyled";
const Layout = () => {
  return (
    <>
      <LayoutS>
        <Navbar />
        <div>
          <NavbarLeft />
          <div>
            <h1>Next</h1>
          </div>
          <WaveS>
            <img
              src="https://i.ibb.co/HX6mS65/Vector.jpg"
              alt="Vector"
              border="0"
            />
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
