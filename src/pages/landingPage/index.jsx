import Hero from "../../components/hero"
import Navbarmenu from "../../components/navbar"

const LandingPage = () => {
  return (
    <div className="">
      {/* <Navbar/> */}
      {/* <div className="fixed w-full z-999999999 top-0 left-0">
      </div> */}
      <Navbarmenu />

      <Hero />
    </div>
  );
}

export default LandingPage