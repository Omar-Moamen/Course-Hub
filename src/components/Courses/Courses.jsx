import './Courses.css'
import {useDispatch, useSelector} from "react-redux";
import {getCourses} from "../../store/coursesSlice";
import React, {useEffect,useState} from "react";
import Course from './Course';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleRight} from '@fortawesome/free-solid-svg-icons';
import {faAngleLeft} from '@fortawesome/free-solid-svg-icons';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


function SampleNextArrow(props)

{
   const {onClick} = props;

   return (
      <button
         className='carousel-right-arrow position-absolute'
         onClick={onClick}
      >
         <FontAwesomeIcon icon={faAngleRight} />
      </button>
   );
}
function SamplePrevArrow(props)
{
   const {onClick} = props;
console.log("prevvvvvvvvvvv")
   return (
      <button
         className='carousel-left-arrow position-absolute'
         onClick={onClick}
      >
         <FontAwesomeIcon icon={faAngleLeft} />
      </button>
   );
}

function Courses()
{


   const {coursesData, loading} = useSelector(state => state.courses);

   const [currentSlide, setCurrentSlide] = useState(0);

   
   const courses = coursesData && coursesData.map((course, i) => (
      <Course key={course.academyCourseId} data={course} index={i} side={Slider.SwipeDirection} firstSlide = {currentSlide}/>)
   );

   console.log(courses)

   
   


   const dispatch = useDispatch();

   useEffect(() =>
   {
      console.log('coursesTest')
      dispatch(getCourses());
   }, [dispatch]);

   // const responsive = {
   //    superLargeDesktop: {
   //       // the naming can be any, depends on you.
   //       breakpoint: {max: 4000, min: 1200},
   //       items: 5,
   //       slidesToSlide: 3,
   //    },
   //    desktop: {
   //       breakpoint: {max: 1200, min: 991},
   //       items: 4,
   //       slidesToSlide: 2,
   //    },
   //    tablet: {
   //       breakpoint: {max: 991, min: 767},
   //       items: 3,
   //    },
   //    mobile: {
   //       breakpoint: {max: 767, min: 0},
   //       items: 1
   //    }
   // };

   let settings = {
      dots: false,
      infinite: false,
      lazyLoad: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 3,
      swipeToSlide: false,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      afterChange: (current) => setCurrentSlide(current),
      responsive: [
         {
            breakpoint: 1198,
            settings: {
               slidesToShow: 4,
               slidesToScroll: 3,
            }
         },
         {
            breakpoint: 1024,
            settings: {
               slidesToShow: 3,
               slidesToScroll: 3,
            }
         },
         {
            breakpoint: 767,
            settings: {
               slidesToShow: 2,
               slidesToScroll: 2,
            }
         },
         {
            breakpoint: 576,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1,
            }
         },
         {}
      ],
      
   };

   return (
      // <div className='carousel-wrapper position-relative'>
      //    <Carousel
      //       className='courses-carousel position-static'
      //       responsive={responsive}
      //       draggable={false}
      //       itemClass='minus-zIndex d-block'
      //    >
      //       {courses}
      //    </Carousel>
      // </div>
      <>

         <div className='carousel-wrapper position-relative' >
            <Slider
               className='courses-carousel position-static'
               {...settings}
            >
               {courses}
            </Slider>
         </div>

      </>
   )
}

export default React.memo(Courses);
