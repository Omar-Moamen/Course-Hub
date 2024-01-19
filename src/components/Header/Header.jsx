import {Container, Nav, Navbar} from "react-bootstrap";
import {useRef} from "react";
import './Header.css';
import {Link, NavLink, useLocation} from "react-router-dom";

function Header()
{
   // Get the location pathname to control mainNav classes & styles
   const {pathname} = useLocation();
   const navRef = useRef();

   // Show Navbar while scrolling down 
   const scrollHandler = () =>
   {
      window.addEventListener("scroll", () =>
      {
         let scrollTop = document.documentElement.scrollTop;
         if ((scrollTop !== 0 && navRef && pathname === "/") || pathname !== "/")
         {
            navRef.current.classList.add('bg-light', 'text-black', 'alt-nav-hover', 'main-nav-shadow');
         }
         else
         {
            navRef.current.classList.remove('bg-light');
            navRef.current.classList.remove('text-black');
            navRef.current.classList.remove('alt-nav-hover');
            navRef.current.classList.remove('main-nav-shadow');
         }
      })
   }
   scrollHandler();


   return (
      <Navbar id="mainNav"
         className={`${pathname !== '/' ? "text-black alt-nav-hover main-nav-shadow" : null} fixed-top py-3`}
         ref={navRef}
         expand="lg">
         <Container className="px-4 px-lg-5">
            <Link to={'/'} className="navbar-brand">Logo</Link>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
               <Nav
                  className="ms-auto gap-4 my-2 my-lg-0 fw-bold mw-100"
               >
                  <NavLink to="/">Home</NavLink>
                  <NavLink to="#action2">Services</NavLink>
                  <NavLink to="#action3">About</NavLink>
                  <NavLink to="#action4">Contact</NavLink>
               </Nav>
            </Navbar.Collapse>
         </Container>
      </Navbar>
   )
}

export default Header;