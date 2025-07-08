import { Button, Navbar, NavbarBrand, NavbarCollapse, NavbarToggle } from "flowbite-react";
import { NavLink } from "react-router";

const Nav = () => {
    return (
        <Navbar fluid rounded>
            <NavbarBrand>
                <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">Apartment Manager</span>
            </NavbarBrand>
            <NavbarToggle />
            <NavbarCollapse>
                <NavLink to={'/'}>Home</NavLink>
                <NavLink to={'/'}>Apartment</NavLink>
                <Button  className="bg-gradient-to-br from-green-400 to-blue-600 text-white hover:bg-gradient-to-bl focus:ring-green-200 dark:focus:ring-green-800">
                    Sign In
                </Button>

            </NavbarCollapse>
        </Navbar>
    );
}
export default Nav
