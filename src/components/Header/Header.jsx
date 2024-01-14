import {Container, Nav, Navbar} from "react-bootstrap";
import {useRef} from "react";
import './Header.css';

function Header()
{
   const navRef = useRef();

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
         // Handle new hover

      })
   }

   scrollHandler();


   return (
      <Navbar id="mainNav" ref={navRef} expand="lg" className=" fixed-top bg-transparent">
         <Container>
            <Navbar.Brand href="#home">Logo</Navbar.Brand>
            <Nav className="ms-auto">
               <Nav.Link className="mx-3" href="#home">Home</Nav.Link>
               <Nav.Link className="mx-3" href="#link">Link</Nav.Link>
               <Nav.Link className="mx-3" href="#link">Link</Nav.Link>
               <Nav.Link className="mx-3" href="#link">Link</Nav.Link>
            </Nav>
         </Container>
      </Navbar>
   )
}

export default Header;