import styles from "./index.module.css"
import image from "../../assets/salad-image.jpeg";

import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Link,
  Navbar,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";
import { useState } from "react";
import { IoChevronDownOutline } from "react-icons/io5";

const Hero = () => {
  // const [isMenuOpen, setIsMenuOpen] = useState(false);

  // const menuItems = [
  //   "Profile",
  //   "Dashboard",
  //   "Activity",
  //   "Analytics",
  //   "System",
  //   "Wish List",
  //   "User",
  //   "Notification",
  //   "Log In",
  //   "Log Out",
  // ];
  return (
    <div className="min-h-[70vh] flex justify-center items-center gap-3 relative">
      <div className=" bg-[#F7F5F0] w-full relative  self-stretch z-0">
        fist
      </div>

      <div className={`relative  bg-green-900 w-[80%]   self-stretch  `}>
        <div className="relative ">
          <img
            src={image}
            alt="image"
            className="absolute h-[300px] max-sm:h-[200px] max-sm:top-[150px] w-[300px] top-[100px] left-[-50px]"
          />
        </div>
        second
      </div>
    </div>
  );
};

export default Hero;
