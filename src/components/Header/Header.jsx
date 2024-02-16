import {Container, Nav, Navbar} from "react-bootstrap";
import {useEffect, useState} from "react";
import './Header.css';
import {Link, NavLink, useLocation} from "react-router-dom";
import {faCircleUser} from "@fortawesome/free-regular-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useSelector} from "react-redux";

export default function Header()
{
   // ReduxToolkit selectors
   const {user, isLoggedIn} = useSelector(state => state.auth);
   const [showUserIcon, setShowUserIcon] = useState(false);

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
      isLoggedIn && user && user.firstName && user.lastName ?
         setShowUserIcon(true) : setShowUserIcon(false)
   }, [isLoggedIn, user])
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
               "bg-transparent nav-color"} fixed-top px-lg-4`}
         expand="lg"
      >
         <Container className={`${screenSize < 992 ? "bg-light" : null} px-4 px-lg-5 h-100`}>
            <Link to={'/'} className="navbar-brand ms-3 ms-lg-0">Logo</Link>
            <Navbar.Toggle
               className={
                  `${toggler ? "rotate-bars" : ""}
                  border-0 position-relative rounded-0 me-3 me-lg-0`
               }
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
            <Nav
               className={
                  `${screenSize < 992 ? "text-black-50" : null}
                     me-auto me-lg-3 ms-lg-auto gap-4 fw-bold py-4 py-lg-0
                     align-items-center`}
            >
               {
                  pathname === "/" ?
                     <>
                        <Nav.Link to="/">About</Nav.Link>
                        <Nav.Link to="#services">Services</Nav.Link>
                        <Nav.Link to="#portfolio">Portfolio</Nav.Link>
                        <Nav.Link to="#portfolio">Contact</Nav.Link>
                     </>
                     :
                     <>
                        <NavLink className="navbar-link" to="/" end>About</NavLink>
                        <NavLink className="navbar-link" to="/services">Services</NavLink>
                        <NavLink className="navbar-link" to="/portfolio">Portfolio</NavLink>
                        <NavLink className="navbar-link" to="portfolio">Contact</NavLink>
                     </>
               }
            </Nav>
            {
               showUserIcon && screenSize > 991 ?
                  <div className="
                        nav-user-info
                        d-flex
                        flex-column
                        align-items-center
                        ps-lg-5
                        pe-lg-3
                        m-auto"
                  >
                     <FontAwesomeIcon icon={faCircleUser} />
                     <p className="p-0 m-0">{`${user && user.firstName} ${user.lastName}`}</p>
                  </div>
                  : null
            }
         </Navbar.Collapse>
      </Navbar>
   )
}