import {
  Navbar,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Badge,
} from "@nextui-org/react";

import { IoChevronDownOutline } from "react-icons/io5";

import { FaArrowRight, FaRegHeart } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa6";
import { IoMdSearch } from "react-icons/io";

import {
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";
import { useState } from "react";
import { MdOutlineNotifications } from "react-icons/md";

export default function Navbarmenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "Connect with us",
    "Wish List",
    "User",
    "Notification",
    "Log In",
    "Log Out",
  ];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} className={`opacity-[.5] max-sm:opacity-[10] navbar-main fixed `}>
      <div className="flex w-[50%] justify-center items-center left-side">
        <NavbarContent>
          <NavbarItem>
            <span className="text-black">GO</span>
            <span className="font-bold text-inherit"> FOOD</span>
          </NavbarItem>
        </NavbarContent>

        <NavbarContent className="hidden sm:flex  gap-4 navbar-child-2 w-full">
          {/*  */}
          <Dropdown
            className="place-self-end middle-content"
            id="middle-content"
          >
            <NavbarItem>
              <DropdownTrigger>
                <Button
                  disableRipple
                  className="p-0  bg-transparent data-[hover=true]:bg-transparent "
                  endContent={<IoChevronDownOutline className="mt-1" />}
                  radius="sm"
                >
                  Home
                </Button>
              </DropdownTrigger>
            </NavbarItem>
            <DropdownMenu
              aria-label="ACME features"
              className="bg-gray-100 rounded-lg"
              itemClasses={{
                base: "gap-4",
              }}
            >
              <DropdownItem
                key="autoscaling"
                description="ACME scales apps to meet user demand, automagically, based on load."
              >
                Autoscaling
              </DropdownItem>
              <DropdownItem
                key="usage_metrics"
                description="Real-time metrics to debug issues. Slow query added? We’ll show you exactly where."
              >
                Usage Metrics
              </DropdownItem>
              <DropdownItem
                key="production_ready"
                description="ACME runs on ACME, join us and others serving requests at web scale."
              >
                Production Ready
              </DropdownItem>
              <DropdownItem
                key="99_uptime"
                description="Applications stay on the grid with high availability and high uptime guarantees."
              >
                +99% Uptime
              </DropdownItem>
              <DropdownItem
                key="supreme_support"
                description="Overcome any challenge with a supporting team ready to respond."
              >
                +Supreme Support
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
          {/*  */}

          {/*  */}

          <Dropdown>
            <NavbarItem>
              <DropdownTrigger>
                <Button
                  disableRipple
                  className="p-0  bg-transparent data-[hover=true]:bg-transparent "
                  endContent={<IoChevronDownOutline className="mt-1" />}
                  radius="sm"
                >
                  Groceries
                </Button>
              </DropdownTrigger>
            </NavbarItem>
            <DropdownMenu
              aria-label="ACME features"
              className="bg-gray-100 rounded-lg"
            >
              <DropdownItem
                key="autoscaling"
                description="ACME scales apps to meet user demand, automagically, based on load."
              >
                Autoscaling
              </DropdownItem>
              <DropdownItem
                key="usage_metrics"
                description="Real-time metrics to debug issues. Slow query added? We’ll show you exactly where."
              >
                Usage Metrics
              </DropdownItem>
              <DropdownItem
                key="production_ready"
                description="ACME runs on ACME, join us and others serving requests at web scale."
              >
                Production Ready
              </DropdownItem>
              <DropdownItem
                key="99_uptime"
                description="Applications stay on the grid with high availability and high uptime guarantees."
              >
                +99% Uptime
              </DropdownItem>
              <DropdownItem
                key="supreme_support"
                description="Overcome any challenge with a supporting team ready to respond."
              >
                +Supreme Support
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <Dropdown>
            <NavbarItem>
              <DropdownTrigger>
                <Button
                  disableRipple
                  className="p-0  bg-transparent data-[hover=true]:bg-transparent "
                  endContent={<IoChevronDownOutline className="mt-1" />}
                  radius="sm"
                >
                  Pages
                </Button>
              </DropdownTrigger>
            </NavbarItem>
            <DropdownMenu
              aria-label="ACME features"
              className="bg-gray-100 rounded-lg"
              itemClasses={{
                base: "gap-4",
              }}
            >
              <DropdownItem
                key="autoscaling"
                description="ACME scales apps to meet user demand, automagically, based on load."
              >
                Autoscaling
              </DropdownItem>
              <DropdownItem
                key="usage_metrics"
                description="Real-time metrics to debug issues. Slow query added? We’ll show you exactly where."
              >
                Usage Metrics
              </DropdownItem>
              <DropdownItem
                key="production_ready"
                description="ACME runs on ACME, join us and others serving requests at web scale."
              >
                Production Ready
              </DropdownItem>
              <DropdownItem
                key="99_uptime"
                description="Applications stay on the grid with high availability and high uptime guarantees."
              >
                +99% Uptime
              </DropdownItem>
              <DropdownItem
                key="supreme_support"
                description="Overcome any challenge with a supporting team ready to respond."
              >
                +Supreme Support
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarContent>
      </div>
      <div className=" justify-between flex right-side">
        <NavbarContent
          className="navbar-child-3 "
        >
          <NavbarItem className=" w-full">
            <Button as={Link} className="text-white font-light opacity-[.8] max-sm:hidden" href="#" variant="flat">
              Connect with us{" "}
              <span>
                <FaArrowRight size={12} />
              </span>
            </Button>
          </NavbarItem>
          <NavbarItem className="flex justify-center items-center gap-5 max-sm:hidden">
            <div className="h-[30px] w-[30px] rounded-[50%]  text-white bg-green-700 opacity-[.5] flex items-center justify-center">
              <IoMdSearch />
            </div>
            <div className="h-[30px] w-[30px] rounded-[50%]  text-white bg-green-700 opacity-[.5] flex items-center justify-center">
              <FaRegUser />
            </div>
            <Badge content="5" color="primary" className="bg-yellow-500">
              <div className="h-[30px] w-[30px] rounded-[50%] text-white bg-green-700 opacity-[.5] flex items-center justify-center">
                <FaRegHeart />
              </div>
            </Badge>
            <Badge content="5" color="primary" className="bg-yellow-500">
              <div className="h-[30px] w-[30px] rounded-[50%] text-white bg-green-700 opacity-[.5]  flex items-center justify-center">
                <MdOutlineNotifications />
              </div>
            </Badge>
          </NavbarItem>

          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden"
          />
        </NavbarContent>
      </div>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2
                  ? "primary"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              className="w-full"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
