import './Courses.css'
import {useDispatch, useSelector} from "react-redux";
import {getCourses} from "../../store/coursesSlice";
import {useEffect} from "react";
import {Col, Row} from "react-bootstrap";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faStar as solidStart, faStarHalfStroke} from '@fortawesome/free-solid-svg-icons';
import {faStar as regStar, } from '@fortawesome/free-regular-svg-icons';

function Courses()
{
   const {courses, loading} = useSelector(state => state.courses);

   const dispatch = useDispatch();

   useEffect(() =>
   {
      console.log('coursesTest')
      dispatch(getCourses());
   }, [dispatch])

   return (
      <Row className='courses-container'>
         <Col className="course-box text-start" md="3">
            <div className="image-holder">
               <img className="img-fluid" src="https://place-hold.it/253x120" alt="scratch" />
            </div>
            <div className="course-info">
               <h6 className="course-title">Scratch</h6>
               <p className="author">John Doe</p>
               <div className="course-rating">
                  <span className="ratio">4.5</span>
                  <div className='stars-wrapper d-inline'>
                     <span className="stars"><FontAwesomeIcon icon={solidStart} /></span>
                     <span className="stars"><FontAwesomeIcon icon={solidStart} /></span>
                     <span className="stars"><FontAwesomeIcon icon={solidStart} /></span>
                     <span className="stars"><FontAwesomeIcon icon={solidStart} /></span>
                     <span className='stars'><FontAwesomeIcon icon={faStarHalfStroke} /></span>
                  </div>
                  <span className="reviews">(150,000)</span>
               </div>
            </div>
         </Col>
      </Row>
   )
}

export default Courses;
