import Counter from "../components/Counter";
import Text from "../components/Text";
import Login from "./Login";
import Register from "./Register";
import OurMission from "../components/OurMission"
import Carousel1 from "../components/Carousel1";
import Navbar1 from "../components/Navbar1";
import DonateNow from "../components/DonateNow";
import axios from "axios";

export default function HomePage() {

  const token = localStorage.getItem('token')

  axios.get('http://127.0.0.1:8000/api/user/', { headers: {"Authorization" : `Bearer ${token}`} })
        .then(res => {
            console.log(res.data.name);
            localStorage.setItem('name', res.data.name)
        })
  
  return (
    <div>
      
      <Navbar1 />
      <Carousel1 />
      <Counter />
      <Text />
      <OurMission />
      <DonateNow />
      
    </div>
  );
}
