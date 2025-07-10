import {
    Button,
    Navbar,
    NavbarBrand,
    NavbarCollapse,
    NavbarToggle,
    Dropdown,
    DropdownItem,
    Avatar,
    DropdownDivider
} from "flowbite-react";

import { NavLink, useNavigate } from "react-router"; 
import useAuth from "../../hooks/useAuth";

const Nav = () => {
    const navigate = useNavigate();
    const { users, signOutUser } = useAuth();

    const handleSignOut = () => {
        signOutUser().then(result => { console.log(result) }).catch(error => { console.log(error) })
    }


    return (
        <Navbar fluid rounded>
            <NavbarBrand>
                <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">Apartment Manager</span>
            </NavbarBrand>
            <NavbarToggle />
            <NavbarCollapse>
                <NavLink to={'/'}>Home</NavLink>
                <NavLink to={'/apartment'}>Apartment</NavLink>

                {
                    users ? <Dropdown label={
                        <Avatar img={users.photoURL} rounded status="online" />
                    } dismissOnClick={false}>
                        <DropdownItem>{users.displayName }</DropdownItem>
                        <DropdownItem>Dashboard</DropdownItem>
                        <DropdownDivider />
                        <DropdownItem onClick={handleSignOut}>Sign out</DropdownItem>
                  </Dropdown> : <Button onClick={() => navigate('/sign-in')} className="bg-gradient-to-br from-green-400 to-blue-600 text-white hover:bg-gradient-to-bl focus:ring-green-200 dark:focus:ring-green-800">
                        Sign In
                    </Button>
                }


            </NavbarCollapse>
        </Navbar>
    );
}
export default Nav
