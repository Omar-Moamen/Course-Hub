import {Container, Nav, Navbar} from "react-bootstrap";
import {useEffect, useState} from "react";
import './Header.css';
import {Link, NavLink, useLocation} from "react-router-dom";

export default function Header()
{

   const {pathname} = useLocation();
   const [showNavbar, setShowNavbar] = useState(false);
   const [screenSize, setScreenSize] = useState(window.innerWidth);
   const [toggler, setToggler] = useState(false);

   // Functions
   const resizeHandler = () =>
   {
      setScreenSize(window.innerWidth);
   }

   // Effects
   useEffect(() =>
   {
      const scrollHandler = () => 
      {
         let scrollTop = document.documentElement.scrollTop;
         if (scrollTop > 0)
         {
            setShowNavbar(true)
         }
         else
         {
            setShowNavbar(false)
         }
      }
      window.addEventListener('scroll', scrollHandler);

      return () => window.removeEventListener('scroll', scrollHandler);
   }, [])

   useEffect(() =>
   {
      window.addEventListener('resize', resizeHandler);

      return () => window.removeEventListener('resize', resizeHandler);
   }, [screenSize])

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
         </Container>
         <Navbar.Collapse
            id="basic-navbar-nav"
            className={`${screenSize < 992 ? "bg-light main-shadow" : null}`}
         >
            <Container>
               <Nav
                  className={`${screenSize < 992 ? "text-black-50" : null} px-3 me-auto me-lg-0 ms-lg-auto gap-4 fw-bold py-4`}
               >
                  <NavLink to="/">About</NavLink>
                  <NavLink to="#action2">Services</NavLink>
                  <NavLink to="#action3">Portfolio</NavLink>
                  <NavLink to="#action4">Contact</NavLink>
               </Nav>
            </Container>
         </Navbar.Collapse>
      </Navbar>
   )
}