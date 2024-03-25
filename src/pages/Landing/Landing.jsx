import './Landing.css'
import {Col, Container, Row} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import skillsImg from '../../assets/imgs/skills.png';
import successImg from '../../assets/imgs/success.png';
import profileImg from '../../assets/imgs/profile.png';
import tackleFuture from '../../assets/imgs/tackle-future.png';
import teaching from '../../assets/imgs/teaching.png';
import productDesign from '../../assets/imgs/product-design.png';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faAnglesDown} from '@fortawesome/free-solid-svg-icons';
import {useSelector} from 'react-redux';
import Courses from '../../components/Courses/Courses';
import useUserActivation from '../../hooks/use-user-activation';
import SEO from '../../components/SEO';

function Landing()
{
   const {user} = useSelector(state => state.auth);

   const {role, activated} = useUserActivation();

   return (
      <>
         <SEO
            title="Learn To Code - Coding Courses For Kids"
            description="Learn To Code - Coding Courses For Kids"
            name="CourseHub"
            type="summary-large-image"
         />
         {/* <Helmet>
               <title>Learn To Code - Coding Courses For Kids</title>
               <meta name='description' content='Learn To Code - Coding Courses For Kids' />
            </Helmet> */}

         {
            role === "instructor" && activated === 0 ? null :
               <>
                  <div className='landing-overlay'>
                     <div id='Landing' className='landing section'>
                        <Container className='px-4 h-100'>
                           <Row className="
                  h-100 text-center
                  align-items-center justify-content-center"
                           >
                              <Col className="align-self-end" lg="8">
                                 <h1 className='main-heading text-white text-capitalize mb-3'>
                                    Your favorite place to learn programming
                                 </h1>
                              </Col>
                              <Col className='align-self-sm-start align-self-baseline' lg="8">
                                 <p className='fs-lg-5 mt-5'>
                                    Something Lorem, ipsum dolor sit amet
                                    consectetur adipisicing elit. Reiciendis,
                                    aliquid iure atque magnam delectus ipsa
                                    explicabo incidunt recusandae voluptatibus,
                                    rerum, hic aliquam
                                 </p>
                                 <a className='
                           btn border-0
                           text-white rounded-pill
                           text-uppercase fw-semibold mt-3'
                                    href="#About">
                                    Find out more
                                 </a>
                              </Col>
                              <a className='arrow-icon position-absolute' href='#About'>
                                 <FontAwesomeIcon icon={faAnglesDown} />
                              </a>
                           </Row>
                        </Container>
                     </div>
                  </div>
                  <div id='About' className="about section">
                     <Container className='px-4 text-center'>
                        <Row className='align-items-center justify-content-center'>
                           <Col className='' lg='8'>
                              <h2 className='main-heading text-white mb-3'>
                                 We've got what you need!
                              </h2>
                           </Col>
                           <Col className='' lg='8'>
                              <p className='fs-lg-5 mt-5'>
                                 Something Lorem, ipsum dolor sit amet consectetur
                                 adipisicing elit. Reiciendis, aliquid iure atque magnam
                                 delectus ipsa explicabo incidunt recusandae
                                 voluptatibus, rerum, hic aliquam
                              </p>
                              <Link
                                 to={user ? 'home' : 'login'}
                                 className='
                           btn btn-light border-0
                           text-black rounded-pill
                           text-uppercase fw-semibold mt-3'>Get Started!
                              </Link>
                           </Col>
                        </Row>
                     </Container>
                  </div >
                  <div id='Services' className='services section'>
                     <Container className='px-4 text-center'>
                        <h2 className='main-heading text-capitalize mb-5'>Our services</h2>
                        <Row className='align-items-center mt-5 pt-5'>
                           <Col className='
                  service-box
                  text-center
                  d-flex flex-column 
                  justify-content-center 
                  align-items-center
                  mt-3'
                              md='6' lg='4'
                           >
                              <div className='image-holder'>
                                 <img className='img-fluid' src={skillsImg} alt="Skills" />
                              </div>
                              <h6 className='my-3'>Real world skills</h6>
                              <p className='text-black-50'>
                                 Students learn the same tools which they'll use it in
                                 real world jobs
                              </p>
                           </Col>
                           <Col className='
                  service-box
                  text-center
                  d-flex flex-column 
                  justify-content-center 
                  align-items-center
                  mt-3'
                              md='6' lg='4'
                           >
                              <div className='image-holder'>
                                 <img className='img-fluid' src={successImg} alt="Success" />
                              </div>
                              <h6 className='my-3'>Unique Advantage</h6>
                              <p className='text-black-50'>
                                 Gives them a unique advantage to help get into their desired
                                 school, college or university
                              </p>
                           </Col>
                           <Col className='
                  service-box
                  text-center
                  d-flex flex-column 
                  justify-content-center 
                  align-items-center
                  mt-3'
                              md='6' lg='4'
                           >
                              <div className='image-holder'>
                                 <img className='img-fluid'
                                    src={tackleFuture}
                                    alt="Tackle-Future" />
                              </div>
                              <h6 className='my-3'>Tackle the Future</h6>
                              <p className='text-black-50'>
                                 Students will be on their way to innovate future technologies
                              </p>
                           </Col>
                           <Col className='
                  service-box
                  text-center
                  d-flex flex-column 
                  justify-content-center 
                  align-items-center
                  mt-3'
                              md='6' lg='4'
                           >
                              <div className='image-holder'>
                                 <img className='img-fluid' src={profileImg} alt="Profile" />
                              </div>
                              <h6 className='my-3'>Outstanding curriculum</h6>
                              <p className='text-black-50'>
                                 Our curriculum is designed & developed by university
                                 educators.
                              </p>
                           </Col>
                           <Col className='
                  service-box
                  text-center
                  d-flex flex-column 
                  justify-content-center 
                  align-items-center
                  mt-3'
                              md='6' lg='4'
                           >
                              <div className='image-holder'>
                                 <img className='img-fluid' src={teaching} alt="Teaching" />
                              </div>
                              <h6 className='my-3'>High quality teaching</h6>
                              <p className='text-black-50'>
                                 Parents are certain of high quality teaching and
                                 approves our courses every year.
                              </p>
                           </Col>
                           <Col className='
                  service-box
                  text-center
                  d-flex flex-column 
                  justify-content-center 
                  align-items-center
                  mt-3'
                              md='6' lg='4'
                           >
                              <div className='image-holder'>
                                 <img className='img-fluid'
                                    src={productDesign}
                                    alt="Product-Design"
                                 />
                              </div>
                              <h6 className='my-3'>Jaw-Dropping Portfolios</h6>
                              <p className='text-black-50'>
                                 Kids develop a jaw-dropping portfolio to show off their skills
                              </p>
                           </Col>
                        </Row>
                     </Container>
                  </div>
                  <div id='Courses' className='courses section'>
                     <Container className='text-center'>
                        <h2 className='main-heading text-capitalize mb-5'>Our Courses</h2>
                        <Courses />
                     </Container>
                  </div>
               </>
         }
      </>
   )
}

export default Landing;
