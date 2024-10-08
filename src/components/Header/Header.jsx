import './Header.css';
import {Container, Nav, Navbar} from "react-bootstrap";
import React, {useEffect, useState} from "react";
import {Link, NavLink, useLocation} from "react-router-dom";
import {faCircleUser} from "@fortawesome/free-regular-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import useUserData from '../../hooks/use-user-data';
import {removeActiveClasses} from '../../util/removeActiveClasses';
import useScreenSize from '../../hooks/use-screen-size';

const navItems = ["About", "Services", "Courses", "Contact"];

function Header()
{
   // Get The current User with custom hook
   const {user} = useUserData();
   const {pathname} = useLocation();
   const [showNavbar, setShowNavbar] = useState(false);
   const [screenSize] = useScreenSize();
   const [toggler, setToggler] = useState(false);

   let mainNavClassName = `fixed-top px-lg-4`;

   if (showNavbar || screenSize < 992 || pathname !== "/")
   {
      mainNavClassName =
         "bg-light text-black alt-nav-hover main-shadow active-hover fixed-top px-lg-4";
   }
   else
   {
      mainNavClassName = "bg-transparent nav-color fixed-top px-lg-4";
   }

   // Effects

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

      return () => window.removeEventListener("scroll", mainNavStylesHandler);
   }, []);

   // Switch active links on scrolling
   useEffect(() =>
   {
      const switchActiveLinksHandler = () =>
      {
         let currentSection = 'Landing';

         // Select array of sections to loop on it
         let sectionEls = document.querySelectorAll('.section');
         let scrollTop = document.documentElement.scrollTop;

         sectionEls.forEach(sectionEl =>
         {
            if (scrollTop >= (sectionEl.offsetTop - sectionEl.clientHeight / 3))
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

      window.addEventListener("scroll", switchActiveLinksHandler);

      return () => window.removeEventListener("scroll", switchActiveLinksHandler);
   }, []);

   return (
      <>
         {
            <Navbar
               id="mainNav"
               className={mainNavClassName}
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
                              {navItems.map(item => (
                                 <Nav.Link key={item} href={`#${item}`}>{item}</Nav.Link>
                              ))}
                           </>
                           :
                           <>
                              {navItems.map(item => (
                                 <NavLink key={item} className="navbar-link" to="/">{item}</NavLink>
                              ))}
                           </>
                     }
                  </Nav>
                  {
                     user && screenSize > 991 ?
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
                           <p className="p-0 m-0">{`${user && user?.firstName} ${user && user?.lastName}`}</p>
                        </div>
                        : null
                  }
               </Navbar.Collapse>
            </Navbar>
         }
      </>
   )
}

export default Header