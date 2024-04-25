import {Col, Row} from 'react-bootstrap';
import './Footer.css';
import {Link, useLocation} from 'react-router-dom';
import {faGlobe} from '@fortawesome/free-solid-svg-icons';
import {faFacebookF, faLinkedinIn, faXTwitter} from '@fortawesome/free-brands-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Moment from 'react-moment';
import {useSelector} from 'react-redux';

function Footer()
{
   const {pathname} = useLocation();
   const {user} = useSelector(state => state.auth);

   return (
      <>
         {
            (user?.role === "instructor" && user?.activated === 0) ||
               pathname === "/login" ||
               pathname === "/instructor-signup" ||
               pathname === "/parent-signup" ||
               pathname === "/activate" ? null :

               <footer id='mainFooter' className="main-footer py-4 px-5">
                  <Row className='links-and-language'>
                     <Col className='mb-2 mb-md-0 order-1' md="2">
                        <ul className='nav-list list-unstyled'>
                           <li><a href="#About">About us</a></li>
                           <li><a href="#Services">Services</a></li>
                           <li><a href="#Services">Courses</a></li>
                           <li><a href="#Contact">Contact us</a></li>
                        </ul>
                     </Col>
                     <Col className='mb-2 mb-md-0 order-2' md="2">
                        <ul className='nav-list list-unstyled'>
                           <li><Link to="/">Careers</Link></li>
                           <li><Link to="/">Help and Support</Link></li>
                           <li><Link to="/">Affiliate</Link></li>
                           <li><Link to="/">Investors</Link></li>
                        </ul>
                     </Col>
                     <Col className='mb-2 mb-md-0 order-3' md="2">
                        <ul className='nav-list list-unstyled'>
                           <li><Link to="/">Terms</Link></li>
                           <li><Link to="/">Privacy and Policy</Link></li>
                           <li><Link to="/">Sitemap</Link></li>
                        </ul>
                     </Col>
                     <Col className='mt-3 mt-md-0 order-4' md="2">
                        <ul className='
                              social-icons
                              m-0
                              list-unstyled
                              d-flex align-items-center
                              gap-3'
                        >
                           <li className='facebook-icon'>
                              <a href="/#"><FontAwesomeIcon icon={faFacebookF} /></a>
                           </li>
                           <li className='x-icon'>
                              <a href="/#"><FontAwesomeIcon icon={faXTwitter} /></a>
                           </li>
                           <li className='linkedin-icon'>
                              <a href="/#"><FontAwesomeIcon icon={faLinkedinIn} /></a>
                           </li>
                        </ul>
                     </Col>
                     <Col
                        className='
                           d-flex 
                           align-items-start 
                           justify-content-start
                           justify-content-md-end 
                           pb-3 pb-md-0 
                           order-0 order-md-5'
                        md="4"
                     >
                        <button className='language-btn' type='button'>
                           <FontAwesomeIcon icon={faGlobe} />
                           <span>English</span>
                        </button>
                     </Col>
                  </Row>
                  <Row className='
                           logo-and-copyright
                           align-items-start 
                           align-items-md-center 
                           justify-content-between
                           flex-column flex-md-row
                           gap-3 gap-md-0'
                  >
                     <div className='footer-logo'>
                        <Link to="/">Logo</Link>
                     </div>
                     <div className='copyright'>
                        &copy; <Moment format={"YYYY"} /> <span>CourseHub</span>, Inc.
                     </div>
                  </Row>
               </footer>

         }
      </>

   )
}

export default Footer
