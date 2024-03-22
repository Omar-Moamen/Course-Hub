import {Col, Row} from 'react-bootstrap';
import './Footer.css';
import {Link} from 'react-router-dom';
import {faGlobe} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

function Footer()
{
   return (
      <footer id='mainFooter' className="main-footer py-4 px-5">
         <Row className='links-and-language'>
            <Col md="3">
               <ul className='nav-list list-unstyled'>
                  <li><a href="#About">About us</a></li>
                  <li><a href="#Services">Services</a></li>
                  <li><a href="#Services">Courses</a></li>
                  <li><a href="#Contact">Contact us</a></li>
               </ul>
            </Col>
            <Col md="3">
               <ul className='nav-list list-unstyled'>
                  <li><Link to="/">Careers</Link></li>
                  <li><Link to="/">Help and Support</Link></li>
                  <li><Link to="/">Affiliate</Link></li>
                  <li><Link to="/">Investors</Link></li>
               </ul>
            </Col>
            <Col
               className='d-flex align-items-start justify-content-end'
               md="6"
            >
               <button className='language-btn' type='button'
               >
                  <FontAwesomeIcon icon={faGlobe} />
                  <span>English</span>
               </button>
            </Col>
         </Row>
         <Row className='logo-and-copyright'>
            <Col>
               <div className='footer-logo'>
                  <Link to="/">Logo</Link>
               </div>
            </Col>
         </Row>

      </footer>
   )
}

export default Footer
