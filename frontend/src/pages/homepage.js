import Counter from "../components/Counter";
import Text from "../components/Text";
import Login from "./Login";
import Register from "./Register";
import OurMission from "../components/OurMission"
import Carousel1 from "../components/Carousel1";
import Navbar1 from "../components/Navbar1";

export default function HomePage() {
  
  return (
    <div>
      
      <Navbar1 />
      <Carousel1 />
      <Counter />
      <Text />
      <OurMission />
      
    </div>
  );
}
