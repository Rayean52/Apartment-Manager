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

import { Link, NavLink, useNavigate } from "react-router"; 
import useAuth from "../../hooks/useAuth";

const Nav = () => {
    const navigate = useNavigate();
    const { users, signOutUser } = useAuth();

    const handleSignOut = () => {
        signOutUser().then(result => { console.log(result) }).catch(error => { console.log(error) })
    }


    return (
        <Navbar fluid rounded className="py-5 z-50 relative">
            <NavbarBrand>
                <img className="w-12 m-2" src="https://i.ibb.co/rRnWxK3V/social-10096251.png" alt="" />
                <span className="self-center whitespace-nowrap text-3xl font-bold dark:text-white">FlatFlow</span>
            </NavbarBrand>
            <NavbarToggle />
            <NavbarCollapse>
                <NavLink className="text-lg" to={'/'}>Home</NavLink>
                <NavLink className="text-lg" to={'/apartment'}>Apartment</NavLink>

                {
                    users ? <Dropdown label={
                        <Avatar img={users.photoURL} rounded status="online" />
                    } dismissOnClick={false}>
                        <DropdownItem>{users.displayName }</DropdownItem>
                        <Link to={'/dashboard'} ><DropdownItem>Dashboard</DropdownItem></Link>
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
