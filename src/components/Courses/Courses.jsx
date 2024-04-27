import './Courses.css'
import {useDispatch, useSelector} from "react-redux";
import {getCourses} from "../../store/coursesSlice";
import React, {useEffect, useState, useRef} from "react";
import Course from './Course';

import {register} from 'swiper/element/bundle';
// register Swiper custom elements
register();

function Courses()
{
   const {coursesData, loading} = useSelector(state => state.courses);

   const [currentSlide] = useState(0);

   const courses = coursesData && coursesData.map((course, i) => (
      <swiper-slide key={course.academyCourseId} lazy="true">
         <Course
            data={course} index={i}
            firstSlide={currentSlide}
            len={coursesData.length} />
      </swiper-slide>)
   );

   const swiperRef = useRef(null);

   console.log(courses)

   const dispatch = useDispatch();

   useEffect(() =>
   {
      console.log('coursesTest')

      dispatch(getCourses());
   }, [dispatch]);

   // assign & initialize swiper
   useEffect(() =>
   {
      const swiperContainer = swiperRef.current;

      const swiperParams = {
         navigation: true,
         injectStyles: [
            `
            .swiper-button-prev svg,
            .swiper-button-next svg {
               max-width: 20px;
               max-height: 20px;
            }
            `
         ],
         breakpoints: {
            576: {
               slidesPerView: 1,
               cssMode: false,
            },
            640: {
               slidesPerView: 2,
               cssMode: false,
            },
            767: {
               slidesPerView: 3,
               cssMode: false,
            },
            1024: {
               slidesPerView: 4,
               cssMode: false,
            },
            1400: {
               slidesPerView: 5,
               //cssMode if (true) popover will be hidden at the Y-axis
               cssMode: true,
            },
         },
      }

      Object.assign(swiperContainer, swiperParams);
      swiperContainer.initialize();

   }, [swiperRef])

   return (
      <>
         <div className='carousel-wrapper position-relative' >
            <swiper-container
               ref={swiperRef}
               init="false"
            >
               {courses}
            </swiper-container>
         </div>

      </>
   )
}

export default React.memo(Courses);
