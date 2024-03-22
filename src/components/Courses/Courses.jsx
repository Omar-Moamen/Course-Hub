import './Courses.css'
import {useDispatch, useSelector} from "react-redux";
import {getCourses} from "../../store/coursesSlice";
import {useEffect} from "react";
import Course from './Course';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

function Courses()
{
   const {coursesData, loading} = useSelector(state => state.courses);

   const courses = coursesData && coursesData.map(course => (
      <Course key={course.academyCourseId} data={course} />)
   );

   console.log(courses)

   const dispatch = useDispatch();

   useEffect(() =>
   {
      console.log('coursesTest')
      dispatch(getCourses());
   }, [dispatch]);

   const responsive = {
      superLargeDesktop: {
         // the naming can be any, depends on you.
         breakpoint: {max: 4000, min: 1200},
         items: 5,
         slidesToSlide: 3,
      },
      desktop: {
         breakpoint: {max: 1200, min: 991},
         items: 4,
         slidesToSlide: 2,
      },
      tablet: {
         breakpoint: {max: 991, min: 767},
         items: 3,
      },
      mobile: {
         breakpoint: {max: 767, min: 0},
         items: 1
      }
   };

   return (
      <div className='carousel-wrapper position-relative'>
         <Carousel
            className='courses-carousel position-static'
            responsive={responsive}
            draggable={false}
         >
            {courses}
         </Carousel>
      </div>
   )
}

export default Courses;
