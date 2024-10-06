import './Courses.css'
import {useDispatch, useSelector} from "react-redux";
import {getCourses} from "../../store/coursesSlice/actions/getCourses";
import React, {useEffect, useState, useRef} from "react";
import Course from './Course';

import {register} from 'swiper/element/bundle';
// register Swiper custom elements
register();

function Courses()
{
   const {coursesData} = useSelector(state => state.courses);

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

   const dispatch = useDispatch();

   useEffect(() =>
   {
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
               //cssMode (true) popover will be hidden at the Y-axis
               cssMode: false,
            },
            640: {
               slidesPerView: 2,
               cssMode: false,
               slidesPerGroup: 2,
            },
            767: {
               slidesPerView: 3,
               cssMode: false,
               slidesPerGroup: 3,
            },
            1024: {
               slidesPerView: 4,
               cssMode: false,
               slidesPerGroup: 3,
            },
            1400: {
               slidesPerView: 5,
               //cssMode (false) popover will be hidden behind the next course-card
               cssMode: true,
               slidesPerGroup: 3,
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
