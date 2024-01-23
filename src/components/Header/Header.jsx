import {Container, Nav, Navbar} from "react-bootstrap";
import {useEffect, useState} from "react";
import './Header.css';
import {Link, NavLink, useLocation} from "react-router-dom";

export default function Header()
{
   // Get the location pathname to control mainNav classes & styles
   const {pathname} = useLocation();
   const [showNavbar, setShowNavbar] = useState(false);
   const [screenSize, setScreenSize] = useState(window.innerWidth);
   const [toggler, setToggler] = useState(false);


   useEffect(() =>
   {
      window.addEventListener('resize', () => setScreenSize(window.innerWidth))
   }, [screenSize])

   const scrollHandler = () =>
   {
      window.addEventListener("scroll", () =>
      {
         let scrollTop = window.scrollY;
         if (scrollTop > 0)
         {
            setShowNavbar(true)
         }
         else
         {
            setShowNavbar(false)
         }
      })
   }
   scrollHandler()

   return (
      <Navbar
         id="mainNav"
         className={`
         ${showNavbar || screenSize < 992 || pathname !== "/" ?
               "bg-light text-black alt-nav-hover main-shadow" :
               "bg-transparent nav-color"} fixed-top py-3`}
         expand="lg"
      >
         <Container className={`${screenSize < 992 ? "bg-light" : null} px-4 px-lg-5`}>
            <Link to={'/'} className="navbar-brand">Logo</Link>
            <Navbar.Toggle
               className={`${toggler ? "rotate-bars" : ""} border-0 position-relative rounded-0`}
               aria-controls="basic-navbar-nav"
               onClick={() => setToggler(!toggler)}
            >
               <span></span>
               <span></span>
               <span></span>
            </Navbar.Toggle>
            <Navbar.Collapse
               id="basic-navbar-nav"
               className={`${screenSize < 992 ? "bg-light" : null}`}
            >
               <Nav
                  className={`${screenSize < 992 ? "text-black-50" : null} me-auto me-lg-0 ms-lg-auto gap-4 fw-bold py-4`}
               >
                  <NavLink to="/">About</NavLink>
                  <NavLink to="#action2">Services</NavLink>
                  <NavLink to="#action3">Portfolio</NavLink>
                  <NavLink to="#action4">Contact</NavLink>
               </Nav>
            </Navbar.Collapse>
         </Container>
      </Navbar>
   )
}