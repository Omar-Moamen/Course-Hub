import './Header.css';
import {Container, Nav, Navbar} from "react-bootstrap";
import {useEffect, useState} from "react";
import {Link, NavLink, useLocation} from "react-router-dom";
import {faCircleUser} from "@fortawesome/free-regular-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {userIsLoggedIn} from "../../store/authSlice";
import {useDispatch, useSelector} from "react-redux";

export default function Header({userData})
{
   // Get The Current User
   // const {user} = useUserData();

   // selectors
   const {isLoggedIn} = useSelector(state => state.auth);
   const dispatch = useDispatch();

   const {pathname} = useLocation();
   const [showNavbar, setShowNavbar] = useState(false);
   const [screenSize, setScreenSize] = useState(window.innerWidth);
   const [toggler, setToggler] = useState(false);

   // Functions
   const resizeHandler = () =>
   {
      setScreenSize(window.innerWidth);
   };

   // Effects
   useEffect(() =>
   {
      dispatch(userIsLoggedIn());
   }, [dispatch]);

   // Change mainNav => [color, backgroundColor, hover styles]
   useEffect(() =>
   {
      const mainNavStylesHandler = () =>
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

      window.addEventListener('scroll', mainNavStylesHandler);

      return () => window.removeEventListener('scroll', mainNavStylesHandler);
   }, []);

   // Switch active links on scrolling
   useEffect(() =>
   {
      // Remove active classes from array of elements
      const removeActiveClasses = (elsArr) =>
      {
         elsArr.forEach(el => el.classList.remove('active'));
      };

      const switchActiveLinksHandler = () =>
      {
         let currentSection = 'landing';

         // Select array of sections to loop on it
         let sectionEls = document.querySelectorAll('.section');
         let scrollTop = document.documentElement.scrollTop;

         sectionEls.forEach(sectionEl =>
         {
            if (scrollTop >= (sectionEl.offsetTop - sectionEl.clientHeight / 3.2))
            {
               currentSection = sectionEl.id;
            }
         })

         // Select array of .nav-link to loop on it to handle active class
         let navLinks = document.querySelectorAll('.nav-link');

         navLinks.forEach(navLink =>
         {
            if (navLink.href.includes(currentSection))
            {
               // Remove active class from all links
               removeActiveClasses(navLinks);
               navLink.classList.add('active');
            }
            // 
            if (scrollTop < 250)
            {
               removeActiveClasses(navLinks);
            }
         })
      }

      window.addEventListener('scroll', switchActiveLinksHandler);

      return () => window.removeEventListener('scroll', switchActiveLinksHandler);
   }, []);

   // Change mainNav according to screenSize
   useEffect(() =>
   {
      window.addEventListener('resize', resizeHandler);

      return () => window.removeEventListener('resize', resizeHandler);
   }, [screenSize]);

   return (
      <Navbar
         id="mainNav"
         className={`
         ${showNavbar || screenSize < 992 || pathname !== "/" ?
               "bg-light text-black alt-nav-hover main-shadow active-hover" :
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
                        <Nav.Link href="#about">About</Nav.Link>
                        <Nav.Link href="#services">Services</Nav.Link>
                        <Nav.Link href="#portfolio">Portfolio</Nav.Link>
                        <Nav.Link href="#contact">Contact</Nav.Link>
                     </>
                     :
                     <>
                        <NavLink className="navbar-link" to="/">About</NavLink>
                        <NavLink className="navbar-link" to="/">Services</NavLink>
                        <NavLink className="navbar-link" to="/">Portfolio</NavLink>
                        <NavLink className="navbar-link" to="/">Contact</NavLink>
                     </>
               }
            </Nav>
            {
               isLoggedIn && userData && screenSize > 991 ?
                  <div className="
                        nav-user-info
                        text-capitalize
                        d-flex
                        flex-column
                        align-items-center
                        ps-lg-5
                        pe-lg-3
                        m-auto"
                  >
                     <FontAwesomeIcon icon={faCircleUser} />
                     <p className="p-0 m-0">{`${userData && userData.firstName} ${userData.lastName}`}</p>
                  </div>
                  : null
            }
         </Navbar.Collapse>
      </Navbar>
   )
}