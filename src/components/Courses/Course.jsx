import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faStar as solidStart, faStarHalfStroke} from '@fortawesome/free-solid-svg-icons';
import {faStar as regStar, } from '@fortawesome/free-regular-svg-icons';

function Course({data})
{
   return (
      <div className="course-card text-start">
         <div className="image-holder">
            <img className="img-fluid" src="https://i.ytimg.com/vi/HCrzlV7nMCk/maxresdefault.jpg" alt={data.courseName} />
         </div>
         <div className="course-info">
            <h6 className="course-title text-capitalize">{data.courseName}</h6>
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
            <span className='course-price d-block text-uppercase'>Egp 1,499.99</span>
            <span className='course-badge d-block'>Bestseller</span>
         </div>
      </div>
   )
}

export default Course;
