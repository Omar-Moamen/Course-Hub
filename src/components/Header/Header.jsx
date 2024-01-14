import {Container, Nav, NavDropdown, Navbar} from "react-bootstrap";
import {useRef} from "react";
import './Header.css';

function Header()
{
   const navRef = useRef();

   // Show Navbar while scrolling down 
   const scrollHandler = () =>
   {
      window.addEventListener("scroll", () =>
      {
         let scrollTop = document.documentElement.scrollTop;
         if (scrollTop !== 0 && navRef)
         {
            navRef.current.classList.remove('bg-transparent');
            navRef.current.classList.add('bg-light', 'text-black');
         }
         else
         {
            navRef.current.classList.remove('bg-light');
            navRef.current.classList.remove('text-black');
            navRef.current.classList.add('bg-transparent');
         }
      })
   }

   scrollHandler();


   return (
      <Navbar id="mainNav" className="bg-transparent fixed-top py-2" ref={navRef} expand="lg">
         <Container>
            <Navbar.Brand href="#">Logo</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
               <Nav
                  className="ms-auto gap-3 my-2 my-lg-0 fw-bold"
                  style={{maxHeight: '100px'}}
                  navbarScroll
               >
                  <Nav.Link href="#action1">Home</Nav.Link>
                  <Nav.Link href="#action2">About</Nav.Link>
                  <Nav.Link href="#action2">Services</Nav.Link>
                  <Nav.Link href="#action2">Contact</Nav.Link>
               </Nav>
            </Navbar.Collapse>
         </Container>
      </Navbar>
   )
}

export default Header;